# PivotChangeDimHeader: Операция

PivotChangeDimHeader: Операция
-


**


# PivotChangeDimHeader


## Синтаксис


bool PivotChangeDimHeader(string mon, PivotChangeDimHeaderArg
 tArg)


## Параметры


mon. Моникёр
 для работы с измерением среза данных.


tArg. Параметры изменения расположения
 измерения.


## Описание


Операция PivotChangeDimHeader
 изменяет расположение измерения.


## Комментарии


Операция позволяет изменить заголовок, в котором расположено измерение.
 Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot!PivotDims!<ключ
 измерения>» для работы с измерением среза данных, а в поле tArg.pos укажите новый заголовок,
 в область которого необходимо переместить измерение.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).
 Список измерений можно получить, используя операцию [GetPivotMetaData](GetPivotMetaData.htm).


Операция возвращает значение true,
 если перемещение измерения завершилось успешно.


## Пример


Ниже приведён пример изменения расположения измерения источника в срезе
 данных. В запросе передаётся моникёр для работы с измерениями среза и
 тип заголовка, в область которого необходимо переместить измерение. В
 ответе приходит признак успешного перемещения.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PivotChangeDimHeader xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!991</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <pos>Left</pos>  </tArg>
  </PivotChangeDimHeader>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PivotChangeDimHeaderResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PivotChangeDimHeaderResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PivotChangeDimHeader" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!991",
   "tArg" :
    {
     "pos" : "Left"
    }
  }
}

### JSON-ответ:


{
 "PivotChangeDimHeaderResult" : "1"
}


public static bool ChangeDimHeader(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey, PvtDimPos newDimPosition)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tChange = new PivotChangeDimHeader()
    {
        tArg = new PivotChangeDimHeaderArg()
        {
            pos = newDimPosition
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!PivotDims!" + dimKey.ToString()
    };
    //Изменение позиции измерения
    var result = somClient.PivotChangeDimHeader(tChange);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
