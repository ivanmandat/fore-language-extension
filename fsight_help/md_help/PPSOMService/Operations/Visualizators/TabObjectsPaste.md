# TabObjectsPaste: Операция

TabObjectsPaste: Операция
-


**


# TabObjectsPaste


## Синтаксис


bool TabObjectsPaste(TabSheetId tTabSheet, ArgType
 tArg)


## Параметры


tTabSheet. Моникёр
 таблицы.


tArg. Параметры выполнения
 операции.


## Описание


Операция TabObjectsPaste вставляет
 скопированные объекты таблицы.


## Комментарии


Операция позволяет вставить объекты, которые ранее были скопированы/вырезаны
 с помощью операций TabObjectsCopy/TabObjectsCut. Для выполнения операции
 укажите в поле tTabSheet моникёр
 таблицы, а в поле tArg параметры
 вставки. Моникёр может быть сформирован на основании моникёра открытого
 экземпляра объекта, с таблицей которого осуществляется работа.


Результатом операции будет логическое значение true,
 если вставка объектов завершилась успешно.


## Пример


Ниже приведён пример вставки объектов на лист регламентного отчёта.
 В запросе передаётся моникёр листа регламентного отчёта, поток, содержащий
 скопированные/вырезанные объекты, и координаты ячейки, в области которой
 осуществляется вставка. В ответе приходит признак удачной вставки.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabObjectsPaste xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTabSheet xmlns="****">
  <id>S1!M!S!P1!1</id>  </tTabSheet>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <data>egAAAAIAAAABAAAAAAoAAABQAHIAeABQAGkAYwB0AHUAcgBlAAoAAABQAHIAeABQAGkAYwB0AHUAcgBlAAAiXED7wgJCwB5FQShcT0EFAAAAAgAAAAAAAAABAAAAAQAAAAAAAAAAAAAABAAAABQBAAACAgAAAAIBAAAAAgIAAAACCgAAAAL/////CgECAQAAAAXvAAAAAgAAAO8AAAA0AAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAEdJRjg5YRAAEACDAAAAAAD////7+/v4+Pjp6enc3Nzb29vQ0NDIyMj///8AAAAAAAAAAAAAAAAAAAAAAAAh/wtORVRTQ0FQRTIuMAMBAQAAIfkEAQAACQAsAAAAABAAEAAACFUAEwgcSLCgwYEEDh40gMCAQoIGDgw44PBhRAEBBFBUeDGAR40VIR7A6PHjxoEMESAoULKAyoYHEZRE8FCgTI80a94MkPPhzp4Kf9ZMIFTnS6BDDQYEADsAAAAAAAAAAAIAAAAwADoAAAAAAA==</data>  <row>10</row>  <column>10</column>  </tArg>
  </TabObjectsPaste>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabObjectsPasteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabObjectsPasteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabObjectsPaste" :
  {
   "tTabSheet" :
    {
     "id" : "S1!M!S!P1!1"
    },
   "tArg" :
    {
     "data" : "egAAAAIAAAABAAAAAAoAAABQAHIAeABQAGkAYwB0AHUAcgBlAAoAAABQAHIAeABQAGkAYwB0AHUAcgBlAAAiXED7wgJCwB5FQShcT0EFAAAAAgAAAAAAAAABAAAAAQAAAAAAAAAAAAAABAAAABQBAAACAgAAAAIBAAAAAgIAAAACCgAAAAL\/\/\/\/\/CgECAQAAAAXvAAAAAgAAAO8AAAA0AAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAEdJRjg5YRAAEACDAAAAAAD\/\/\/\/7+\/v4+Pjp6enc3Nzb29vQ0NDIyMj\/\/\/8AAAAAAAAAAAAAAAAAAAAAAAAh\/wtORVRTQ0FQRTIuMAMBAQAAIfkEAQAACQAsAAAAABAAEAAACFUAEwgcSLCgwYEEDh40gMCAQoIGDgw44PBhRAEBBFBUeDGAR40VIR7A6PHjxoEMESAoULKAyoYHEZRE8FCgTI80a94MkPPhzp4Kf9ZMIFTnS6BDDQYEADsAAAAAAAAAAAIAAAAwADoAAAAAAA==",
     "row" : "10",
     "column" : "10"
    }
  }
}

### JSON-ответ:


{
 "TabObjectsPasteResult" : "1"
}


public static bool PasteTabObjects(string moniker, byte[] objects, long row, long column)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabObjectsPaste()
    {
        tTabSheet = new TabSheetId() { id = moniker },
        tArg = new TabObjectsPasteArg()
        {
            data = objects,
            row = row,
            column = column
        }
    };
    // Вставка объектов
    var result = somClient.TabObjectsPaste(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
