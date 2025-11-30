# GetHieMembers: Операция

GetHieMembers: Операция
-


**


# GetHieMembers


## Синтаксис


GetHieMembersResult GetHieMembers(HieId tHie, GetHieMembersArg
 tArg)


## Параметры


tHie.
 Моникёр иерархии показателей.


tArg. Параметры получения списка
 элементов показателей.


## Описание


Операция GetHieMembers извлекает
 список элементов иерархии показателей.


## Комментарии


Для выполнения операции необходимо в параметре tHie
 указать моникёр иерархии, а в поле tArg
 параметры извлечения информации о показателях. Моникёр может быть получен
 при выполнении операции [OpenHie](OpenHie.htm).
 Результатом работы операции будет коллекция показателей, которая будет
 доступна в поле hms.


## Пример


Ниже приведён пример получения списка элементов иерархии показателей.
 В запросе передаётся моникёр иерархии показателей. В ответе приходит полученный
 список.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetHieMembers xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tHie xmlns="****">
  <id>S1!M!S!H2</id>  </tHie>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<parent>
  <p />
  </parent>
  <filter />
[![](../../minus.gif)](../../#)<pattern>
  <attributes />
  <getAttsTextValues>true</getAttsTextValues>  </pattern>
  </tArg>
  </GetHieMembers>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetHieMembersResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!H2</id>  </id>
[![](../../minus.gif)](../../#)<parent xmlns="****">
  <p />
  </parent>
[![](../../minus.gif)](../../#)<hms xmlns="****">
[![](../../minus.gif)](../../#)<m isLeaf="**0**">
  <p>1@1</p>  <n>Годовая</n>  <o>0</o>  </m>
  </hms>
  <notEof xmlns="****">0</notEof>  </GetHieMembersResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetHieMembers" :
  {
   "tHie" :
    {
     "id" : "S1!M!S!H2"
    },
   "tArg" :
    {
     "parent" :
      {
       "p" : ""
      },
     "filter" : "",
     "pattern" :
      {
       "attributes" : "",
       "getAttsTextValues" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetHieMembersResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!H2"
    },
   "parent" :
    {
     "p" : ""
    },
   "hms" :
    {
     "m" :
      {
       "@isLeaf" : "0",
       "p" : "1@1",
       "n" : "Годовая",
       "o" : "0"
      }
    },
   "notEof" : "0"
  }
}


public static GetHieMembersResult  GetHieMembers(HieId id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tMembers = new GetHieMembers()
    {
        tArg = new GetHieMembersArg()
        {
            parent = new HmKey() { p = string.Empty },
            filter = new HmsFilter(),
            pattern = new HmsPattern()
            {
                attributes = string.Empty,
                getAttsTextValues = true
            }
        },
        tHie = id
    };
    //Получение списка показателей
    var result = somClient.GetHieMembers(tMembers);
    return result;
}


См. также:


[Работа
 с базой данных временных рядов](TimeSeriesDatabase_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
