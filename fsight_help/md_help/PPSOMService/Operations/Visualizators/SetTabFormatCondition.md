# SetTabFormatCondition: Операция

SetTabFormatCondition: Операция
-


**


# SetTabFormatCondition


## Синтаксис


bool SetTabFormatCondition(string mon, TabFormatCondition
 tArg)


## Параметры


mon. Моникёр
 диапазона для работы с его условными форматами.


tArg. Обновлённые настройки
 условного формата.


## Описание


Операция SetTabFormatCondition
 изменяет настройки условного формата для диапазона ячеек.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона!FormatConditions!индекс условного формата»,
 а в поле tArg параметры условного
 формата, которые необходимо применить.


Результатом операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек условного формата. В запросе
 передаётся моникёр условного формата, новые настройки условного формата
 и стиль оформления для ячеек. В ответе приходит признак успешного изменения.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetTabFormatCondition xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A0:B3!FormatConditions!0</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>0</k>  <Key>0</Key>  <Type>CellContent</Type>[![](../../minus.gif)](../../#)<Details>
[![](../../minus.gif)](../../#)<CellContent>
  <ContentType>0</ContentType>  <CellValue>100</CellValue>  <SpecificText />
[![](../../minus.gif)](../../#)<Style>
  <Font S="**10**" B="**true**" />
  </Style>
  <ValueCondition>4</ValueCondition>  <TextCondition>0</TextCondition>  <DateCondition>0</DateCondition>  <MinValue />
  <MaxValue />
  </CellContent>
  </Details>
  </tArg>
  </SetTabFormatCondition>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetTabFormatConditionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetTabFormatConditionResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetTabFormatCondition" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A0:B3!FormatConditions!0",
   "tArg" :
    {
     "k" : "0",
     "Key" : "0",
     "Type" : "CellContent",
     "Details" :
      {
       "CellContent" :
        {
         "ContentType" : "0",
         "CellValue" : "100",
         "SpecificText" : "",
         "Style" :
          {
           "Font" :
            {
             "@B" : "true",
             "@S" : "10"
            }
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
}

### JSON-ответ:


{
 "SetTabFormatConditionResult" : "1"
}


public static bool SetFormatCondition(string moniker, string sheetKey, string address, string formatKey, string cellValue, TabStyle formatStyle)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new SetTabFormatCondition()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address + "!FormatConditions!" + formatKey,
        tArg = new TabFormatCondition()
        {
            Type = TabConditionType.CellContent,
            Details = new TabFormatConditionDetails()
            {
                CellContent = new TabFormatCellContent()
                {
                    ContentType = 0, //TabFormatContentType.CellValue
                    ValueCondition = 4, //TabConditionCellContentValue.Above
                    CellValue = cellValue,
                    Style = formatStyle,
                    SpecificText = "",
                    MinValue = "",
                    MaxValue = ""
                }
            }
        }
    };
    // Изменение параметров условного формата
    var result = somClient.SetTabFormatCondition(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
