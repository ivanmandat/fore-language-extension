# ImportXlsx: Операция

ImportXlsx: Операция
-


**


# ImportXlsx


## Синтаксис


bool ImportXlsx(PrxId prxMon, string filepath)


## Параметры


prxMon. Моникёр
 открытого экземпляра регламентного отчёта.


filepath. Путь и наименование
 файла, из которого осуществляется импорт данных.


## Описание


Операция ImportXlsx импортирует
 данные в регламентный отчёт из файла Microsoft Excel (*.xlsx).


## Комментарии


Для выполнения операции укажите в поле prxMon
 моникёр открытого экземпляра регламентного отчёта, а в поле filepath
 путь и наименование файла, из которого осуществляется загрузка данных.
 Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).
 Регламентный отчёт должен быть открыт на редактирование.


Результатом выполнения операции будет признак успешного импорта данных
 в регламентный отчёт.


## Пример


Ниже приведён пример импорта данных в регламентный отчёт. В запросе
 передаётся моникёр открытого экземпляра регламентного отчёта. В ответе
 возвращается признак успешного импорта.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ImportXlsx xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<prxMon xmlns="****">
  <id>AELGNMIHALCDGOAELMFBAEPIPAJKAGHEDIIHHAINBJCGKDPI!M!S!PINDDOAJHALCDGOAEFKBFEIDGBEFILCHEIIIEGOCDOKLPKNCL</id>  </prxMon>
  <filepath xmlns="****">D:\Work\Data.xlsx</filepath>  </ImportXlsx>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <ImportXlsxResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ImportXlsxResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ImportXlsx" :
  {
   "prxMon" :
    {
     "id" : "AELGNMIHALCDGOAELMFBAEPIPAJKAGHEDIIHHAINBJCGKDPI!M!S!PINDDOAJHALCDGOAEFKBFEIDGBEFILCHEIIIEGOCDOKLPKNCL"
    },
   "filepath" : "D:\Work\Data.xlsx"
  }
}

### JSON-ответ:


{
 "ImportXlsxResult" : "1"
}


public static bool ImportXlsx(string moniker, string fileName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tImp = new ImportXlsx()
    {
        filepath = fileName,
        prxMon = new PrxId() { id = moniker }
    };
    // Импорт данных
    var result = somClient.ImportXlsx(tImp);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
