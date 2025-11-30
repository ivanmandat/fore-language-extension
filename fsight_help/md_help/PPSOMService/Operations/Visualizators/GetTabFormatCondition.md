# GetTabFormatCondition: Операция

GetTabFormatCondition: Операция
-


**


# GetTabFormatCondition


## Синтаксис


TabFormatCondition GetTabFormatCondition(string
 mon)


## Параметры


mon. Моникёр
 диапазона для работы с его условными форматами.


## Описание


Операция GetTabFormatCondition
 получает настройки условного формата для диапазона ячеек.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона!FormatConditions!индекс условного формата».


Результатом операции будут настройки условного формата.


## Пример


Ниже приведён пример получения настроек условного формата. В запросе
 передаётся моникёр условного формата, в ответе приходят полученные настройки.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetTabFormatCondition xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A0:B3!FormatConditions!0</mon>  </GetTabFormatCondition>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetTabFormatConditionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">0</k>  <Key xmlns="****">0</Key>  <Type xmlns="****">CellContent</Type>[![](../../minus.gif)](../../#)<Range xmlns="****">
  <left>0</left>  <top>0</top>  <width>2</width>  <height>4</height>  </Range>
  <Enabled xmlns="****">1</Enabled>[![](../../minus.gif)](../../#)<Details xmlns="****">
[![](../../minus.gif)](../../#)<CellContent>
  <ContentType>0</ContentType>  <CellValue>100</CellValue>  <SpecificText />
[![](../../minus.gif)](../../#)<Style UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Font S="**10**" B="**true**" H="**15**" />
  <Borders />
  <Hyperlink />
  </Style>
  <ValueCondition>4</ValueCondition>  <TextCondition>0</TextCondition>  <DateCondition>0</DateCondition>  <MinValue />
  <MaxValue />
  </CellContent>
  </Details>
  </GetTabFormatConditionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabFormatCondition" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A0:B3!FormatConditions!0"
  }
}

### JSON-ответ:


{
 "GetTabFormatConditionResult" :
  {
   "k" : "0",
   "Key" : "0",
   "Type" : "CellContent",
   "Range" :
    {
     "left" : "0",
     "top" : "0",
     "width" : "2",
     "height" : "4"
    },
   "Enabled" : "1",
   "Details" :
    {
     "CellContent" :
      {
       "ContentType" : "0",
       "CellValue" : "100",
       "SpecificText" : "",
       "Style" :
        {
         "@UNS" : "2",
         "Text" :
          {
           "@VA" : "-1",
           "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
           "@HA" : "-1",
           "@M" : "-1 -1 -1 -1",
           "@WW" : "-1"
          },
         "Font" :
          {
           "@B" : "true",
           "@S" : "10",
           "@H" : "15"
          },
         "Borders" : "",
         "Hyperlink" : ""
        },
       "ValueCondition" : "4",
       "TextCondition" : "0",
       "DateCondition" : "0",
       "MinValue" : "",
       "MaxValue" : ""
      }
    }
  }
}


public static TabFormatCondition GetFormatCondition(string moniker, string sheetKey, string address, string formatKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new GetTabFormatCondition()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address+ "!FormatConditions!" + formatKey
    };
    // Получение параметров условного формата
    var result = somClient.GetTabFormatCondition(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
