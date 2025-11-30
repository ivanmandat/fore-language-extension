# TabRangeCopy: Операция

TabRangeCopy: Операция
-


**


# TabRangeCopy


## Синтаксис


TabRangeCopyResult TabRangeCopy(string mon, TabRangeCopyArg
 tArg)


## Параметры


mon. Моникёр
 для работы с диапазоном ячеек таблицы.


tArg. Параметры копирования
 диапазона ячеек.


## Описание


Операция TabRangeCopy копирует
 содержимое диапазона ячеек.


## Комментарии


Операция позволяет скопировать текст, формулы и оформление диапазона
 ячеек. Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона».


Результатом операции будет коллекция отдельных элементов, содержащих
 скопированные данные. Для вставки используйте операцию [TabRangePaste](TabRangePaste.htm).


## Пример


Ниже приведён пример копирования содержимого диапазона ячеек. В запросе
 передаётся моникёр диапазона и формат, в котором осуществляется копирование.
 В ответе приходит содержимое диапазона в виде потока байтов.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabRangeCopy xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!C0:D3</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <type>1</type>  </tArg>
  </TabRangeCopy>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<TabRangeCopyResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<data xmlns="****">
[![](../../minus.gif)](../../#)<it type="**1**">
  <data>egAAAAMAAAB4nNVV2w3CMAw8O33t0wFQB2AH+KmE1C8WoKMwSgdgIj6AhORKmgrxWWIpVWK7zl0udadhf4c1hTcThlsXiOyG0j47nHHCEYNzdQ0wvoM2NM6Laz+1bbuLB4vI0xq+mItdDnj4md9canV159ckdWjqMIlD4i2UHhFlQPKmRhomokYxM6b2UWepmpmnLvGf0XPEwhT+1O10y7NHih5r9BpAu6IO7DKDF0wTdcos1CE3TdSpyHdDdSr9pQ7PnB16rY4JANjHya8m6nzbAj9//qZIrQlUt5SuwEq6JOMF7LZ1uw==</data>  </it>
  </data>
  </TabRangeCopyResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabRangeCopy" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!C0:D3",
   "tArg" :
    {
     "type" : "1"
    }
  }
}

### JSON-ответ:


{
 "TabRangeCopyResult" :
  {
   "data" :
    {
     "it" :
      {
       "@type" : "1",
       "data" : "egAAAAMAAAB4nNVV2w3CMAw8O33t0wFQB2AH+KmE1C8WoKMwSgdgIj6AhORKmgrxWWIpVWK7zl0udadhf4c1hTcThlsXiOyG0j47nHHCEYNzdQ0wvoM2NM6Laz+1bbuLB4vI0xq+mItdDnj4md9canV159ckdWjqMIlD4i2UHhFlQPKmRhomokYxM6b2UWepmpmnLvGf0XPEwhT+1O10y7NHih5r9BpAu6IO7DKDF0wTdcos1CE3TdSpyHdDdSr9pQ7PnB16rY4JANjHya8m6nzbAj9\/\/qZIrQlUt5SuwEq6JOMF7LZ1uw=="
      }
    }
  }
}


public static TabRangeCopyResult CopyTabRange(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabRangeCopy()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address,
        tArg = new TabRangeCopyArg()
        {
            type = 1
        }
    };
    // Копирование диапазона ячеек
    var result = somClient.TabRangeCopy(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
