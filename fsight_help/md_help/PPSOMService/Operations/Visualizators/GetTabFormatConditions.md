# GetTabFormatConditions: Операция

GetTabFormatConditions: Операция
-


**


# GetTabFormatConditions


## Синтаксис


TabFormatConditionsEx GetTabFormatConditions(string
 mon)


## Параметры


mon. Моникёр
 для работы с условными форматами таблицы аналитической области данных.


## Описание


Операция GetTabFormatConditions
 получает настройки условных форматов, заданных для таблицы аналитической
 области данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра отчёта с постфиксом «!DataArea!Views!«ключ
 таблицы»!EaxTableStyle!InternalFormatConditions». Результатом операции
 будут настройки условных форматов.


## Пример


Ниже приведён пример получения настроек условных форматов, заданных
 для таблицы аналитической области данных. В запросе передаётся моникёр
 для работы с условными форматами, в ответе приходят полученные настройки
 условных форматов.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetTabFormatConditions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!E1!DataArea!Views!1!EaxTableStyle!InternalFormatConditions</mon>  </GetTabFormatConditions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetTabFormatConditionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<conditions xmlns="****">
[![](../../minus.gif)](../../#)<Condition>
  <k>0</k>  <Key>0</Key>  <Type>Values</Type>[![](../../minus.gif)](../../#)<Range>
  <left>0</left>  <top>0</top>  <width>0</width>  <height>0</height>  </Range>
  <Enabled>1</Enabled>[![](../../minus.gif)](../../#)<Details>
[![](../../minus.gif)](../../#)<Values>
  <Style>0</Style>  <MinValueType>0</MinValueType>  <MinValue />
  <MinValueColor>#FF0000</MinValueColor>  <MaxValueType>1</MaxValueType>  <MaxValue />
  <MaxValueColor>#00FF00</MaxValueColor>  <MidValueType>3</MidValueType>  <MidValue>50</MidValue>  <MidValueColor>#FFFF00</MidValueColor>[![](../../minus.gif)](../../#)<Points>
[![](../../minus.gif)](../../#)<Point>
  <Type>3</Type>  <Value>20</Value>  <Condition>1</Condition>  </Point>
[![](../../minus.gif)](../../#)<Point>
  <Type>3</Type>  <Value>40</Value>  <Condition>1</Condition>  </Point>
[![](../../minus.gif)](../../#)<Point>
  <Type>3</Type>  <Value>60</Value>  <Condition>1</Condition>  </Point>
[![](../../minus.gif)](../../#)<Point>
  <Type>3</Type>  <Value>80</Value>  <Condition>1</Condition>  </Point>
  </Points>
  <IconType>Circles</IconType>  <ShowValues>1</ShowValues>  <ReverseIcons>0</ReverseIcons>  </Values>
  </Details>
  </Condition>
  </conditions>
  </GetTabFormatConditionsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabFormatConditions" :
  {
   "mon" : "S1!M!S!E1!DataArea!Views!1!EaxTableStyle!InternalFormatConditions"
  }
}

### JSON-ответ:


{
 "GetTabFormatConditionsResult" :
  {
   "conditions" :
    {
     "Condition" :
      {
       "k" : "0",
       "Key" : "0",
       "Type" : "Values",
       "Range" :
        {
         "left" : "0",
         "top" : "0",
         "width" : "0",
         "height" : "0"
        },
       "Enabled" : "1",
       "Details" :
        {
         "Values" :
          {
           "Style" : "0",
           "MinValueType" : "0",
           "MinValue" : "",
           "MinValueColor" : "#FF0000",
           "MaxValueType" : "1",
           "MaxValue" : "",
           "MaxValueColor" : "#00FF00",
           "MidValueType" : "3",
           "MidValue" : "50",
           "MidValueColor" : "#FFFF00",
           "Points" :
            {
             "Point" :
              [
                {
                 "Type" : "3",
                 "Value" : "20",
                 "Condition" : "1"
                },
                {
                 "Type" : "3",
                 "Value" : "40",
                 "Condition" : "1"
                },
                {
                 "Type" : "3",
                 "Value" : "60",
                 "Condition" : "1"
                },
                {
                 "Type" : "3",
                 "Value" : "80",
                 "Condition" : "1"
                }
              ]
            },
           "IconType" : "Circles",
           "ShowValues" : "1",
           "ReverseIcons" : "0"
          }
        }
      }
    }
  }
}


public static TabFormatConditionsEx GetFormatConditions(string moniker, string viewKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new GetTabFormatConditions()
    {
        mon = moniker + "!DataArea!Views!" + viewKey + "!EaxTableStyle!InternalFormatConditions"
    };
    // Получение параметров условных форматов
    var result = somClient.GetTabFormatConditions(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
