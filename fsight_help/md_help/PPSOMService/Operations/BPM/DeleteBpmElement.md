# DeleteBpmElement: Операция

DeleteBpmElement: Операция
-


**


# DeleteBpmElement


## Синтаксис


DeleteBpmElementResult DeleteBpmElement(BpmProcessId
 tBpmProcess, DeleteBpmElementArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры удаления элементов
 процесса.


## Описание


Операция DeleteBpmElement удаляет
 элементы из процесса.


## Комментарии


Операция позволяет удалить этап, шаг, группу шагов или стартовое событие
 в процессе. Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg
 параметры удаления элементов. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm).


Результатом выполнения операции будет обновлённая структура процесса,
 если было определено поле tBpmProcess.needTree.


## Пример


Ниже приведён пример удаления шага из процесса. В запросе передаётся
 моникёр открытого процесса и GUID удаляемого шага. В ответе возвращается
 обновлённая структура процесса.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DeleteBpmElement xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>COAOPGKGCJKEGOAEIHPPEJNABOOGNDGENKOKNINMLFLJFBMK!M!S!BPHLNJFALGCJKEGOAEJPJLLKGPHKELIFIECLCHAGEBCDNFMELP</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <elType>Stage</elType>[![](../../minus.gif)](../../#)<elGuids>
  <it>{94C3E46B-1BBC-4FFF-9600-49C6B5D344D7}</it>  </elGuids>
  <needTree>true</needTree>  </tArg>
  </DeleteBpmElement>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DeleteBpmElementResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <res xmlns="****">1</res>[![](../../minus.gif)](../../#)<procTree xmlns="****">
  <name>Процесс</name>[![](../../minus.gif)](../../#)<stages>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<stage>
  <name>Этап 1</name>  <index>0</index>  <guid>{0E3D2664-1DB4-42B9-A43F-B63CA721B186}</guid>  </stage>
  <gtwType>No_gateway</gtwType>  <isCondActive>0</isCondActive>[![](../../minus.gif)](../../#)<stGroups>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<stGroup>
  <index>0</index>  <guid>{D5F25EB4-CD78-451E-8308-2AC031D2B2C1}</guid>  </stGroup>
  <steps />
  <isDefaultFlow>0</isDefaultFlow>  </it>
  </stGroups>
  </it>
  </stages>
  </procTree>
  </DeleteBpmElementResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DeleteBpmElement" :
  {
   "tBpmProcess" :
    {
     "id" : "COAOPGKGCJKEGOAEIHPPEJNABOOGNDGENKOKNINMLFLJFBMK!M!S!BPHLNJFALGCJKEGOAEJPJLLKGPHKELIFIECLCHAGEBCDNFMELP"
    },
   "tArg" :
    {
     "elType" : "Stage",
     "elGuids" :
      {
       "it" : "{94C3E46B-1BBC-4FFF-9600-49C6B5D344D7}"
      },
     "needTree" : "true"
    }
  }
}

### JSON-ответ:


{
 "DeleteBpmElementResult" :
  {
   "res" : "1",
   "procTree" :
    {
     "name" : "Процесс",
     "stages" :
      {
       "it" :
        {
         "stage" :
          {
           "name" : "Этап 1",
           "index" : "0",
           "guid" : "{0E3D2664-1DB4-42B9-A43F-B63CA721B186}"
          },
         "gtwType" : "No_gateway",
         "isCondActive" : "0",
         "stGroups" :
          {
           "it" :
            {
             "stGroup" :
              {
               "index" : "0",
               "guid" : "{D5F25EB4-CD78-451E-8308-2AC031D2B2C1}"
              },
             "steps" : "",
             "isDefaultFlow" : "0"
            }
          }
        }
      }
    }
  }
}


public static DeleteBpmElementResult DeleteBpmElement(string moniker, string[] elsToDelete)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new DeleteBpmElement()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new DeleteBpmElementArg()
        {
            elGuids = elsToDelete,
            needTree = true
        }
    };
    // Удаление элемента процесса
    var result = somClient.DeleteBpmElement(tDel);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
