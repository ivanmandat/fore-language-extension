# SetTabFormatConditions: Операция

SetTabFormatConditions: Операция
-


**


# SetTabFormatConditions


## Синтаксис


bool SetTabFormatConditions(string mon, TabFormatConditionsEx
 tArg)


## Параметры


mon. Моникёр
 для работы с условными форматами таблицы аналитической области данных.


tArg. Обновлённые настройки
 условных форматов.


## Описание


Операция SetTabFormatConditions
 изменяет настройки условных форматов для таблицы аналитической области
 данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!Views!«ключ
 таблицы»!EaxTableStyle!InternalFormatConditions», а в поле tArg параметры условных форматов,
 которые необходимо применить. Условные форматы должны быть отвязаны от
 какого-либо диапазона ячеек (поле Range
 в настройках каждого формата должно иметь значение null).


Результатом операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек условных форматов. В запросе
 передаётся моникёр диапазона и новые настройки условных форматов. В ответе
 приходит признак успешного изменения.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetTabFormatConditions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!E1!DataArea!Views!1!EaxTableStyle!InternalFormatConditions</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<conditions>
[![](../../minus.gif)](../../#)<Condition>
  <k>0</k>  <Key>0</Key>  <Type>Values</Type>  <Enabled>true</Enabled>[![](../../minus.gif)](../../#)<Details>
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
  <IconType>Circles</IconType>  <ShowValues>true</ShowValues>  <ReverseIcons>false</ReverseIcons>  </Values>
  </Details>
  </Condition>
  </conditions>
  </tArg>
  </SetTabFormatConditions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetTabFormatConditionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetTabFormatConditionsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetTabFormatConditions" :
  {
   "mon" : "S1!M!S!E1!DataArea!Views!1!EaxTableStyle!InternalFormatConditions",
   "tArg" :
    {
     "conditions" :
      {
       "Condition" :
        {
         "k" : "0",
         "Key" : "0",
         "Type" : "Values",
         "Enabled" : "true",
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
             "ShowValues" : "true",
             "ReverseIcons" : "false"
            }
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetTabFormatConditionsResult" : "1"
}


public static bool SetFormatConditions(string moniker, string viewKey, TabFormatConditionsEx formats)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new SetTabFormatConditions()
    {
        mon = moniker + "!DataArea!Views!" + viewKey + "!EaxTableStyle!InternalFormatConditions",
        tArg = formats
    };
    // Изменение параметров условных форматов
    var result = somClient.SetTabFormatConditions(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
