# MoveSeriesGroupTreeElem: Операция

MoveSeriesGroupTreeElem: Операция
-


**


# MoveSeriesGroupTreeElem


## Синтаксис


bool MoveSeriesGroupTreeElem(ChartAbsoluteGroupId
 mon, MoveSeriesGroupTreeElemArg arg)


## Параметры


mon. Моникёр
 для работы с группами рядов гистограммы.


arg. Параметры выполнения операции.


## Описание


Операция MoveSeriesGroupTreeElem
 перемещает ряд из одной группы в другую у гистограммы.


## Комментарии


Операция используется при работе с гистограммами, отображающими данные
 в виде групп. Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!Objects!идентификатор диаграммы»!Group» для работы с группами
 рядов, а в поле arg параметры
 перемещения ряда. Моникёр экземпляра регламентного отчёта может быть получен
 при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет признак успешного перемещения ряда из одной
 группы в другую.


## Пример


Ниже приведён пример перемещения на гистограмме ряда из второй группы
 в первую. В запросе передаётся моникёр для работы с группами рядов. В
 ответе возвращается признак успешного перемещения ряда.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<MoveSeriesGroupTreeElem xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<mon xmlns="****">
  <id>DJKIICCJHNCAGOAEAEMMLBNLKMJNJKJEKJKGJNLJPENPPEMD!M!S!PCJENOHCJHNCAGOAEOFHBIKJIBIKIODFEDIEGIMLOAMBJKDAG!Sheets!1!Objects!PrxChart4!Group</id>  </mon>
[![](../../minus.gif)](../../#)<arg xmlns="****">
[![](../../minus.gif)](../../#)<from>
  <rgi>1</rgi>  <si>0</si>  </from>
[![](../../minus.gif)](../../#)<to>
  <rgi>0</rgi>  <si>0</si>  </to>
  </arg>
  </MoveSeriesGroupTreeElem>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <MoveSeriesGroupTreeElemResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</MoveSeriesGroupTreeElemResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "MoveSeriesGroupTreeElem" :
  {
   "mon" :
    {
     "id" : "DJKIICCJHNCAGOAEAEMMLBNLKMJNJKJEKJKGJNLJPENPPEMD!M!S!PCJENOHCJHNCAGOAEOFHBIKJIBIKIODFEDIEGIMLOAMBJKDAG!Sheets!1!Objects!PrxChart4!Group"
    },
   "arg" :
    {
     "from" :
      {
       "rgi" : "1",
       "si" : "0"
      },
     "to" :
      {
       "rgi" : "0",
       "si" : "0"
      }
    }
  }
}

### JSON-ответ:


{
 "MoveSeriesGroupTreeElemResult" : "1"
}


public static bool MoveSeriesGroupTreeElem(string moniker, string sheetKey, string chartId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tMove = new MoveSeriesGroupTreeElem()
    {
        mon = new ChartAbsoluteGroupId() { id = moniker + "!Sheets!" + sheetKey + "!Objects!" + chartId + "!Group" },
        arg = new MoveSeriesGroupTreeElemArg()
        {
            from = new ChartGroupTargetElem() { rgi = 1, si = 0 },
            to = new ChartGroupTargetElem() { rgi = 0, si = 0 }
        }
    };
    // Перемещения ряда из одной группы в другую
    var result = somClient.MoveSeriesGroupTreeElem(tMove);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
