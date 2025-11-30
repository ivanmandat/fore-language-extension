# PrxMetaReportExport: Операция

PrxMetaReportExport: Операция
-


**


# PrxMetaReportExport


## Синтаксис


PrxExportData PrxMetaReportExport(string mon, PrxExportDataPattern
 tArg)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


tArg. Параметры экспорта регламентного
 отчёта.


## Описание


Операция PrxMetaReportExport
 экспортирует регламентный отчёт во внешний файл.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта, а в поле tArg
 параметры экспорта.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет информация о полученном файле.


## Пример


Ниже приведён пример экспорта регламентного отчёта в файл Microsoft
 Excel (XLSX). В запросе передаётся моникёр открытого экземпляра регламентного
 отчёта и параметры экспорта. Результирующий файл будет сохранён на BI-сервере.
 В ответе приходит моникёр для доступа к полученному файлу.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaReportExport xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <storeResult>true</storeResult>  <format>xlsx</format>  <palette>true</palette>  <autoHeight>true</autoHeight>  <objectAsBitmap>false</objectAsBitmap>  <cellImages>true</cellImages>  <fixEmfLines>true</fixEmfLines>  <showWarnings>false</showWarnings>  <reportTitle>true</reportTitle>  <sheetTitles>true</sheetTitles>  <chartsAsImages>false</chartsAsImages>  <emptyPages>false</emptyPages>  <breakIntoLayouts>true</breakIntoLayouts>  <headlines>true</headlines>  <sheetAccess>false</sheetAccess>  <flashsAsImages>false</flashsAsImages>  <hiddenSheets>false</hiddenSheets>  <formulas>true</formulas>  </tArg>
  </PrxMetaReportExport>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<PrxMetaReportExportResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <format xmlns="****">xlsx</format>[![](../../minus.gif)](../../#)<storeId xmlns="****">
  <id>S1!M!S!P1!Bin!0</id>  </storeId>
  </PrxMetaReportExportResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaReportExport" :
  {
   "mon" : "S1!M!S!P1",
   "tArg" :
    {
     "storeResult" : "true",
     "format" : "xlsx",
     "palette" : "true",
     "autoHeight" : "true",
     "objectAsBitmap" : "false",
     "cellImages" : "true",
     "fixEmfLines" : "true",
     "showWarnings" : "false",
     "reportTitle" : "true",
     "sheetTitles" : "true",
     "chartsAsImages" : "false",
     "emptyPages" : "false",
     "breakIntoLayouts" : "true",
     "headlines" : "true",
     "sheetAccess" : "false",
     "flashsAsImages" : "false",
     "hiddenSheets" : "false",
     "formulas" : "true"
    }
  }
}

### JSON-ответ:


{
 "PrxMetaReportExportResult" :
  {
   "format" : "xlsx",
   "storeId" :
    {
     "id" : "S1!M!S!P1!Bin!0"
    }
  }
}


public static PrxExportData ExportPrxReport(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tExp = new PrxMetaReportExport()
    {
        tArg = new PrxExportDataPattern()
        {
            format = "xlsx",
            reportTitle = true,
            sheetTitles = true,
            storeResult = true
        },
        mon = moniker
    };
    //Экспорт отчёта
    var result = somClient.PrxMetaReportExport(tExp);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
