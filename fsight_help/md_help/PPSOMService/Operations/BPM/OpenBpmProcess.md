# OpenBpmProcess: Операция

OpenBpmProcess: Операция
-


**


# OpenBpmProcess


## Синтаксис


OpenBpmProcessResult OpenBpmProcess(OdId tObject,
 OpenBpmProcessArg tArg)


## Параметры


tObject. Моникёр
 объекта, являющегося процессом.


tArg. Параметры выполнения операции.


## Описание


Операция OpenBpmProcess открывает
 процесс.


## Комментарии


Операция позволяет получить доступ к структуре процесса. Для выполнения
 операции укажите в поле tObject
 моникёр объекта репозитория, являющегося процессом. Моникёр может быть
 получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).


Результатом работы операции будет моникёр открытого процесса.


## Пример


Ниже приведён пример открытия процесса. В запросе передаётся моникёр
 объекта репозитория, являющегося процессом. В ответе возвращается моникёр
 открытого процесса.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenBpmProcess xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>NCPHMFOLCJKEGOAEDCHDGJJIFKGJAHNEMLOMCOEGJCNMDAIG!M!90884</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenBpmProcess>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenBpmProcessResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>NCPHMFOLCJKEGOAEDCHDGJJIFKGJAHNEMLOMCOEGJCNMDAIG!M!S!BPABMKPGOLCJKEGOAECHPFJNIBANBFMMJELIKODFECPOHPNHDO</id>  </id>
  </OpenBpmProcessResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenBpmProcess" :
  {
   "tObject" :
    {
     "id" : "NCPHMFOLCJKEGOAEDCHDGJJIFKGJAHNEMLOMCOEGJCNMDAIG!M!90884"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenBpmProcessResult" :
  {
   "id" :
    {
     "id" : "NCPHMFOLCJKEGOAEDCHDGJJIFKGJAHNEMLOMCOEGJCNMDAIG!M!S!BPABMKPGOLCJKEGOAECHPFJNIBANBFMMJELIKODFECPOHPNHDO"
    }
  }
}


public static OpenBpmProcessResult OpenBpmProcess(MbId mb, string bpmId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenBpmProcess()
    {
        tArg =  new OpenBpmProcessArg()
        {
            args = new BpmProcessOpenArgs()
            {
                openForEdit = true
            }
        },
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, bpmId).k }
    };
    // Открытие процесса
    var result = somClient.OpenBpmProcess(tOpen);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
