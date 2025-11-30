# PivotMoveDimToIndex: Операция

PivotMoveDimToIndex: Операция
-


**


# PivotMoveDimToIndex


## Синтаксис


bool PivotMoveDimToIndex(string mon, PivotMoveDimToArg
 tArg)


## Параметры


mon. Моникёр
 для работы с измерением среза данных.


tArg. Параметры перемещения
 измерения в заголовке.


## Описание


Операция PivotMoveDimToIndex
 перемещает измерение внутри заголовка.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot!PivotDims!<ключ
 измерения>» для работы с измерением среза данных, а в поле tArg.index укажите индекс новой
 позиции внутри заголовка, в которую необходимо переместить измерение.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).
 Список измерений можно получить, используя операцию [GetPivotMetaData](GetPivotMetaData.htm).


Операция возвращает значение true,
 если перемещение измерения завершилось успешно.


## Пример


Ниже приведён пример изменения расположения измерения источника данных.
 В запросе передаётся моникёр для работы с измерениями среза и индекс позиции
 внутри заголовка, куда необходимо переместить измерение. В ответе приходит
 признак успешного перемещения.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PivotMoveDimToIndex xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!991</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <index>0</index>  </tArg>
  </PivotMoveDimToIndex>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PivotMoveDimToIndexResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PivotMoveDimToIndexResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PivotMoveDimToIndex" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Pivot!PivotDims!991",
   "tArg" :
    {
     "index" : "0"
    }
  }
}

### JSON-ответ:


{
 "PivotMoveDimToIndexResult" : "1"
}


public static bool MoveDimInHeader(string moniker, uint dataSourceKey, uint sliceKey, uint dimKey, long newPosIndex)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tMove = new PivotMoveDimToIndex()
    {
        tArg = new PivotMoveDimToArg()
        {
            index = newPosIndex
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!PivotDims!" + dimKey.ToString()
    };
    //Перемещение измерения внутри загловка
    var result = somClient.PivotMoveDimToIndex(tMove);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
