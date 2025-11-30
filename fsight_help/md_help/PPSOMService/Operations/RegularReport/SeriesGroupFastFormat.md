# SeriesGroupFastFormat: Операция

SeriesGroupFastFormat: Операция
-


**


# SeriesGroupFastFormat


## Синтаксис


ChartSeriesGroupFastFormatResult SeriesGroupFastFormat(ChartAbsoluteGroupId
 mon, ChartSeriesGroupFastArg arg)


## Параметры


mon. Моникёр
 для работы с группами рядов гистограммы.


arg.
 Параметры выполнения операции.


## Описание


Операция SeriesGroupFastFormat
 изменяет группировку рядов у гистограммы.


## Комментарии


Операция используется при работе с гистограммами, отображающими данные
 в виде групп. Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!Objects!идентификатор диаграммы»!Group» для работы с группами
 рядов, а в поле arg.fmt устанавливаемый
 формат расположения рядов в группах.


Допустимые значения поля arg.fmt:


	- 0. Расположить первый
	 ряд отдельно.


	- 1. Расположить ряды
	 вместе.


	- 2. Расположить ряды
	 отдельно.


Моникёр экземпляра регламентного отчёта может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет признак успешного применения изменений и
 обновлённое дерево рядов в группах.


## Пример


Ниже приведён пример изменения группировки рядов гистограммы, расположенной
 на листе регламентного отчёта. В запросе передаётся моникёр для работы
 с группами рядов. В ответе возвращается обновлённое дерево групп рядов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SeriesGroupFastFormat xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<mon xmlns="****">
  <id>DJKIICCJHNCAGOAEAEMMLBNLKMJNJKJEKJKGJNLJPENPPEMD!M!S!PCJENOHCJHNCAGOAEOFHBIKJIBIKIODFEDIEGIMLOAMBJKDAG!Sheets!1!Objects!PrxChart4!Group</id>  </mon>
[![](../../minus.gif)](../../#)<arg xmlns="****">
  <fmt>2</fmt>  </arg>
  </SeriesGroupFastFormat>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SeriesGroupFastFormatResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>[![](../../minus.gif)](../../#)<groups xmlns="****">
[![](../../minus.gif)](../../#)<rg>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<s>
[![](../../minus.gif)](../../#)<it>
  <idx>0</idx>  </it>
  </s>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<s>
[![](../../minus.gif)](../../#)<it>
  <idx>1</idx>  </it>
  </s>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<s>
[![](../../minus.gif)](../../#)<it>
  <idx>2</idx>  </it>
  </s>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<s>
[![](../../minus.gif)](../../#)<it>
  <idx>3</idx>  </it>
  </s>
  </it>
  </rg>
  </groups>
  </SeriesGroupFastFormatResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SeriesGroupFastFormat" :
  {
   "mon" :
    {
     "id" : "DJKIICCJHNCAGOAEAEMMLBNLKMJNJKJEKJKGJNLJPENPPEMD!M!S!PCJENOHCJHNCAGOAEOFHBIKJIBIKIODFEDIEGIMLOAMBJKDAG!Sheets!1!Objects!PrxChart4!Group"
    },
   "arg" :
    {
     "fmt" : "2"
    }
  }
}

### JSON-ответ:


{
 "SeriesGroupFastFormatResult" :
  {
   "result" : "1",
   "groups" :
    {
     "rg" :
      {
       "it" :
        [
          {
           "s" :
            {
             "it" :
              {
               "idx" : "0"
              }
            }
          },
          {
           "s" :
            {
             "it" :
              {
               "idx" : "1"
              }
            }
          },
          {
           "s" :
            {
             "it" :
              {
               "idx" : "2"
              }
            }
          },
          {
           "s" :
            {
             "it" :
              {
               "idx" : "3"
              }
            }
          }
        ]
      }
    }
  }
}


public static ChartSeriesGroupFastFormatResult SeriesGroupFastFormat(string moniker, string sheetKey, string chartId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SeriesGroupFastFormat()
    {
        mon = new ChartAbsoluteGroupId() { id = moniker + "!Sheets!" + sheetKey + "!Objects!" + chartId + "!Group" },
        arg = new ChartSeriesGroupFastArg() { fmt = 2 }
    };
    // Изменение расположения рядов в группах
    var result = somClient.SeriesGroupFastFormat(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
