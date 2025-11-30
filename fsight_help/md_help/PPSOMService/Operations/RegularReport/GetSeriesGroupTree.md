# GetSeriesGroupTree: Операция

GetSeriesGroupTree: Операция
-


**


# GetSeriesGroupTree


## Синтаксис


ChartStyleAbsoluteGroup GetSeriesGroupTree(ChartAbsoluteGroupId
 mon)


## Параметры


mon. Моникёр
 для работы с группами рядов гистограммы.


## Описание


Операция GetSeriesGroupTree
 получает дерево группировки рядов у гистограммы.


## Комментарии


Операция используется при работе с гистограммами, отображающими данные
 в виде групп. Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!Objects!идентификатор диаграммы»!Group» для работы с группами
 рядов. Моникёр экземпляра регламентного отчёта может быть получен при
 выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет дерево групп рядов.


## Пример


Ниже приведён пример получения дерева группировки рядов гистограммы,
 расположенной на листе регламентного отчёта. В запросе передаётся моникёр
 для работы с группами рядов. В ответе возвращается полученное дерево групп
 рядов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetSeriesGroupTree xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<mon xmlns="****">
  <id>DJKIICCJHNCAGOAEAEMMLBNLKMJNJKJEKJKGJNLJPENPPEMD!M!S!PCJENOHCJHNCAGOAEOFHBIKJIBIKIODFEDIEGIMLOAMBJKDAG!Sheets!1!Objects!PrxChart4!Group</id>  </mon>
  </GetSeriesGroupTree>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetSeriesGroupTreeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<rg xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<s>
[![](../../minus.gif)](../../#)<it>
  <idx>0</idx>  <di>0</di>  <n>Первый элемент</n>  </it>
  </s>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<s>
[![](../../minus.gif)](../../#)<it>
  <idx>1</idx>  <di>1</di>  <n>Второй элемент</n>  </it>
[![](../../minus.gif)](../../#)<it>
  <idx>2</idx>  <di>2</di>  <n>Третий элемент</n>  </it>
[![](../../minus.gif)](../../#)<it>
  <idx>3</idx>  <di>3</di>  <n>Четвертый элемент</n>  </it>
  </s>
  </it>
  </rg>
  </GetSeriesGroupTreeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSeriesGroupTree" :
  {
   "mon" :
    {
     "id" : "DJKIICCJHNCAGOAEAEMMLBNLKMJNJKJEKJKGJNLJPENPPEMD!M!S!PCJENOHCJHNCAGOAEOFHBIKJIBIKIODFEDIEGIMLOAMBJKDAG!Sheets!1!Objects!PrxChart4!Group"
    }
  }
}

### JSON-ответ:


{
 "GetSeriesGroupTreeResult" :
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
             "idx" : "0",
             "di" : "0",
             "n" : "Первый элемент"
            }
          }
        },
        {
         "s" :
          {
           "it" :
            [
              {
               "idx" : "1",
               "di" : "1",
               "n" : "Второй элемент"
              },
              {
               "idx" : "2",
               "di" : "2",
               "n" : "Третий элемент"
              },
              {
               "idx" : "3",
               "di" : "3",
               "n" : "Четвертый элемент"
              }
            ]
          }
        }
      ]
    }
  }
}


public static ChartStyleAbsoluteGroup GetSeriesGroupTree(string moniker, string sheetKey, string chartId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSeriesGroupTree()
    {
        mon = new ChartAbsoluteGroupId() { id = moniker + "!Sheets!" + sheetKey + "!Objects!" + chartId + "!Group" }
    };
    // Получение дерева групп рядов
    var result = somClient.GetSeriesGroupTree(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
