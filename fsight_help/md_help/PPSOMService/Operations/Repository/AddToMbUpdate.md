# AddToMbUpdate: Операция

AddToMbUpdate: Операция
-


**


# AddToMbUpdate


## Синтаксис


AddToMbUpdateResult AddToMbUpdate(MbUpdateId tMbUpdate,
 AddToMbUpdateArg tArg)


## Параметры


tMbUpdate. Моникёр
 для работы с обновлением репозитория.


tArg. Параметры выполнения
 операции.


## Описание


Операция AddToMbUpdate добавляет
 объекты репозитория в обновление.


## Комментарии


Для выполнения операции укажите в поле tMbUpdate
 моникёр обновления, а в поле tArg
 параметры добавления объектов. Моникёр может быть получен при выполнении
 операции [OpenMbUpdate](OpenMbUpdate.htm).


Если добавляемый объект или его дочерние объекты являются объектом класса,
 позволяющего обновлять данные и метаданные раздельно:  таблица, присоединенная
 таблица, журнал, справочник НСИ, составной справочник НСИ, база данных
 временных рядов, сегмент куба, то в этом случае в качестве ответа будет
 список объектов, для которых нужно установить значение поля method. В этом случае операцию AddToMbUpdate
 необходимо выполнить повторно, передав исходный список объектов, включая
 те объекты, для которых установлен метод обновления method.


Если среди добавляемых объектов отсутствуют объекты указанных классов,
 то при выполнении операции объекты будут добавлены в обновление, а результатом
 операции будет пустой список в поле unresolved.


## Пример


Ниже приведён пример добавления в обновление двух объектов репозитория.
 Указываются ключи объектов, первый объект добавляется без дочерних объектов,
 для второго объекта устанавливается метод обновления.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<AddToMbUpdate xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbUpdate xmlns="****">
  <id>BHFPHCKJHLCGGOAEKNPALNGBAOKOOMDEGKCPBIMCFPDJOIDF!M!S!MbUpdFEFLAGKJHLCGGOAEADOHGJOMHPENBLJEFKPAAPEMDIMFAIMP</id>  </tMbUpdate>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<objs>
[![](../../minus.gif)](../../#)<it>
  <key>198414</key>  <withChildren>false</withChildren>  </it>
[![](../../minus.gif)](../../#)<it>
  <key>198421</key>  <withChildren>false</withChildren>  <method>All</method>  </it>
  </objs>
  </tArg>
  </AddToMbUpdate>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<AddToMbUpdateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <unresolved xmlns="****" />
  </AddToMbUpdateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddToMbUpdate" :
  {
   "tMbUpdate" :
    {
     "id" : "BHFPHCKJHLCGGOAEKNPALNGBAOKOOMDEGKCPBIMCFPDJOIDF!M!S!MbUpdFEFLAGKJHLCGGOAEADOHGJOMHPENBLJEFKPAAPEMDIMFAIMP"
    },
   "tArg" :
    {
     "objs" :
      {
       "it" :
        [
          {
           "key" : "198414",
           "withChildren" : "false"
          },
          {
           "key" : "198421",
           "withChildren" : "false",
           "method" : "All"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "AddToMbUpdateResult" :
  {
   "unresolved" : ""
  }
}


public static AddToMbUpdateResult AddToMbUpdate(string moniker, uint[] keys)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new AddToMbUpdate()
    {
        tArg = new AddToMbUpdateArg()
        {
            objs = new AddToUpdObjParams[]
            {
                new AddToUpdObjParams()
                {
                    key = keys[0],
                    withChildren = false
                },
                new AddToUpdObjParams()
                {
                    key = keys[1],
                    withChildren = false,
                    method = MbUpdateMethod.All
                }
            }
        },
        tMbUpdate = new MbUpdateId() { id = moniker }
    };
    // Добавление объектов в обновление
    var result = somClient.AddToMbUpdate(tAdd);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
