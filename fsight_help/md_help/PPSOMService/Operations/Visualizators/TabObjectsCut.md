# TabObjectsCut: Операция

TabObjectsCut: Операция
-


**


# TabObjectsCut


## Синтаксис


TabObjectsCopyResult TabObjectsCut(TabSheetId tTabSheet,
 TabObjectsCopyArg tArg)


## Параметры


tTabSheet. Моникёр
 таблицы.


tArg. Параметры вырезания объектов
 таблицы.


## Описание


Операция TabObjectsCut вырезает
 объекты таблицы.


## Комментарии


Операция позволяет вырезать объекты таблицы в буфер для дальнейшей вставки
 в другом месте текущей или другой таблицы. Для выполнения операции укажите
 в поле tTabSheet моникёр таблицы,
 а в поле tArg.ids массив идентификаторов
 вырезаемых объектов. Моникёр может быть сформирован на основании моникёра
 открытого экземпляра объекта, с таблицей которого осуществляется работа.


Результатом операции будет поток байтов вырезанных объектов. Для вставки
 используйте операцию [TabObjectsPaste](TabObjectsPaste.htm).


## Пример


Ниже приведён пример вырезания изображения, расположенного на листе
 регламентного отчёта. В запросе передаётся моникёр листа регламентного
 отчёта и идентификатор вырезаемого изображения. В ответе приходит поток
 байтов, содержащий вырезанное изображение.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabObjectsCut xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTabSheet xmlns="****">
  <id>S1!M!S!P1!1</id>  </tTabSheet>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<ids>
  <it>PrxPicture</it>  </ids>
  </tArg>
  </TabObjectsCut>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<TabObjectsCutResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <data xmlns="****">egAAAAIAAAABAAAAAAoAAABQAHIAeABQAGkAYwB0AHUAcgBlAAoAAABQAHIAeABQAGkAYwB0AHUAcgBlAAAiXED7wgJCwB5FQShcT0EFAAAAAgAAAAAAAAABAAAAAQAAAAAAAAAAAAAABAAAABQBAAACAgAAAAIBAAAAAgIAAAACCgAAAAL/////CgECAQAAAAXvAAAAAgAAAO8AAAA0AAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAEdJRjg5YRAAEACDAAAAAAD////7+/v4+Pjp6enc3Nzb29vQ0NDIyMj///8AAAAAAAAAAAAAAAAAAAAAAAAh/wtORVRTQ0FQRTIuMAMBAQAAIfkEAQAACQAsAAAAABAAEAAACFUAEwgcSLCgwYEEDh40gMCAQoIGDgw44PBhRAEBBFBUeDGAR40VIR7A6PHjxoEMESAoULKAyoYHEZRE8FCgTI80a94MkPPhzp4Kf9ZMIFTnS6BDDQYEADsAAAAAAAAAAAIAAAAwADoAAAAAAA==</data>  </TabObjectsCutResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabObjectsCut" :
  {
   "tTabSheet" :
    {
     "id" : "S1!M!S!P1!1"
    },
   "tArg" :
    {
     "ids" :
      {
       "it" : "PrxPicture"
      }
    }
  }
}

### JSON-ответ:


{
 "TabObjectsCutResult" :
  {
   "data" : "egAAAAIAAAABAAAAAAoAAABQAHIAeABQAGkAYwB0AHUAcgBlAAoAAABQAHIAeABQAGkAYwB0AHUAcgBlAAAiXED7wgJCwB5FQShcT0EFAAAAAgAAAAAAAAABAAAAAQAAAAAAAAAAAAAABAAAABQBAAACAgAAAAIBAAAAAgIAAAACCgAAAAL\/\/\/\/\/CgECAQAAAAXvAAAAAgAAAO8AAAA0AAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAEdJRjg5YRAAEACDAAAAAAD\/\/\/\/7+\/v4+Pjp6enc3Nzb29vQ0NDIyMj\/\/\/8AAAAAAAAAAAAAAAAAAAAAAAAh\/wtORVRTQ0FQRTIuMAMBAQAAIfkEAQAACQAsAAAAABAAEAAACFUAEwgcSLCgwYEEDh40gMCAQoIGDgw44PBhRAEBBFBUeDGAR40VIR7A6PHjxoEMESAoULKAyoYHEZRE8FCgTI80a94MkPPhzp4Kf9ZMIFTnS6BDDQYEADsAAAAAAAAAAAIAAAAwADoAAAAAAA=="
  }
}


public static TabObjectsCopyResult CutTabObjects(string moniker, string[] objects)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabObjectsCut()
    {
        tTabSheet = new TabSheetId() { id = moniker },
        tArg = new TabObjectsCopyArg()
        {
            ids = objects
        }
    };
    // Вырезание объектов таблицы
    var result = somClient.TabObjectsCut(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
