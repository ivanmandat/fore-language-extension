# ConvertTopobase: Операция

ConvertTopobase: Операция
-


**


# ConvertTopobase


## Синтаксис


ConvertTopobaseResult ConvertTopobase(TopobaseId
 tTopobase)


## Параметры


tTopobase. Моникёр
 топоосновы.


## Описание


Операция ConvertTopobase конвертирует
 топооснову.


## Комментарии


Операция выполняется для топооснов, которые были загружены в репозиторий.
 При выполнении операции осуществляется обновление существующих форматов
 топоосновы и создание новых в соответствии со списком форматов, поддерживаемых
 в текущей версии платформы. Для выполнения операции укажите в поле tTopobase моникёр топоосновы в
 репозитории. Моникёр формируется на базе моникёра соединения с репозиторием
 и ключа топоосновы. При конвертации будут созданы варианты топоосновы
 в различных форматах. Данные варианты будут сохранены в базу репозитория
 и использоваться по мере необходимости.


В результате выполнения операции будет информация об успешном/ошибочном
 завершении процесса конвертации.


## Пример


Ниже приведён пример конвертации топоосновы репозитория. В запросе передаётся
 моникёр топоосновы. В ответе возвращается признак успешного завершения
 конвертации.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ConvertTopobase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTopobase xmlns="****">
  <id>S1!M!296652</id>  </tTopobase>
  </ConvertTopobase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ConvertTopobaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </ConvertTopobaseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ConvertTopobase" :
  {
   "tTopobase" :
    {
     "id" : "S1!M!296652"
    }
  }
}

### JSON-ответ:


{
 "ConvertTopobaseResult" :
  {
   "result" : "1"
  }
}


public static ConvertTopobaseResult ConvertTopobase(MbId mb, string topobaseId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tArg = new ConvertTopobase()
    {
        tTopobase = new TopobaseId()
        {
            id = mb.id + '!' + FindObjectById(mb, topobaseId).k
        }
    };
    // Конвертация топоосновы
    var tResult = somClient.ConvertTopobase(tArg);
    return tResult;
}


См. также:


[Топооснова:
 Операции](Map/map_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
