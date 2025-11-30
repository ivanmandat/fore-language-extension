# AddBpmElement: Операция

AddBpmElement: Операция
-


**


# AddBpmElement


## Синтаксис


AddBpmElementResult AddBpmElement(BpmProcessId tBpmProcess,
 AddBpmElementArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры добавления
 элемента в процесс.


## Описание


Операция AddBpmElement создаёт
 новый элемент в процессе.


## Комментарии


Операция позволяет создать новый этап, шаг, группу шагов или стартовое
 событие в процессе. Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg
 параметры создания элемента. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm).


Результатом выполнения операции будет информация о созданном элементе.


## Пример


Ниже приведён пример создания нового этапа в процессе. В запросе передаётся
 моникёр открытого процесса и параметры создания этапа. В ответе возвращается
 информация о созданном этапе.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<AddBpmElement xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>COAOPGKGCJKEGOAEIHPPEJNABOOGNDGENKOKNINMLFLJFBMK!M!S!BPHLNJFALGCJKEGOAEJPJLLKGPHKELIFIECLCHAGEBCDNFMELP</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <elType>Stage</elType>[![](../../minus.gif)](../../#)<stgInf>
  <name>Завершающий этап</name>  </stgInf>
  <ind>1</ind>  </tArg>
  </AddBpmElement>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<AddBpmElementResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <guid xmlns="****">{94C3E46B-1BBC-4FFF-9600-49C6B5D344D7}</guid>  <ind xmlns="****">1</ind>  <childGuid xmlns="****">{433124F8-1861-4CA6-BFDE-B94C54F91652}</childGuid>  </AddBpmElementResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddBpmElement" :
  {
   "tBpmProcess" :
    {
     "id" : "COAOPGKGCJKEGOAEIHPPEJNABOOGNDGENKOKNINMLFLJFBMK!M!S!BPHLNJFALGCJKEGOAEJPJLLKGPHKELIFIECLCHAGEBCDNFMELP"
    },
   "tArg" :
    {
     "elType" : "Stage",
     "stgInf" :
      {
       "name" : "Завершающий этап"
      },
     "ind" : "1"
    }
  }
}

### JSON-ответ:


{
 "AddBpmElementResult" :
  {
   "guid" : "{94C3E46B-1BBC-4FFF-9600-49C6B5D344D7}",
   "ind" : "1",
   "childGuid" : "{433124F8-1861-4CA6-BFDE-B94C54F91652}"
  }
}


public static AddBpmElementResult AddBpmElement(string moniker, string stageName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new AddBpmElement()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new AddBpmElementArg()
        {
            elType = BpmElementType.Stage,
            stgInf = new BpmStageNewInfo()
            {
                name = stageName
            },
            ind = 1
        }
    };
    // Создание нового этапа
    var result = somClient.AddBpmElement(tAdd);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
