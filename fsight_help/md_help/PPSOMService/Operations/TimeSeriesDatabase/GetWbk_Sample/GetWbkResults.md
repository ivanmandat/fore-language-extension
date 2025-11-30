# Получение признаков доступности результатов вычислений

Получение признаков доступности результатов вычислений
-


**


# Получение признаков доступности результатов вычислений


Ниже приведен пример использования операции [GetWbkMd](../GetWbkMd.htm) для получения признаков
 доступности результатов вычислений для рядов рабочей книги. В запросе
 передаются: экземпляр открытой рабочей книги и шаблон получения данных.
 В ответе приходят признаки доступности результатов вычислений.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W7</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>[![](../../../minus.gif)](../../../#)<results>
  <correlation>true</correlation>  <coefficients>true</coefficients>  <weights>true</weights>  <tabSheet>false</tabSheet>  </results>
  </pattern>
  </tArg>
  </GetWbkMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetWbkMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!W7</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>WBK_CALC</i>  <n>Вычисляемые ряды</n>  <k>5541</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**4**">
  <its />
  </series>
[![](../../../minus.gif)](../../../#)<results>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>OBJ2</id>  <n>USA|A</n>  <vis>1</vis>  <correlation>0</correlation>  <coefficients>0</coefficients>  <weights>0</weights>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>13</k>  <id>OBJ13</id>  <n>Geometric trend(France|A)</n>  <vis>1</vis>  <correlation>0</correlation>  <coefficients>1</coefficients>  <weights>0</weights>  </it>
  </its>
  </results>
  </meta>
  </GetWbkMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetWbkMd" :
  {
   "tWbk" :
    {
     "id" : "S1!M!S!W7"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "results" :
        {
         "correlation" : "true",
         "coefficients" : "true",
         "weights" : "true",
         "tabSheet" : "false"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetWbkMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!W7"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "2",
         "@hf" : "0",
         "i" : "WBK_CALC",
         "n" : "Вычисляемые ряды",
         "k" : "5541",
         "c" : "2827",
         "p" : "5471",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "windowsPosition" : "Vertical",
     "hasPivot" : "0",
     "hasLaner" : "1",
     "series" :
      {
       "@count" : "4",
       "its" : ""
      },
     "results" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "2",
             "id" : "OBJ2",
             "n" : "USA|A",
             "vis" : "1",
             "correlation" : "0",
             "coefficients" : "0",
             "weights" : "0"
            },
            {
             "k" : "13",
             "id" : "OBJ13",
             "n" : "Geometric trend(France|A)",
             "vis" : "1",
             "correlation" : "0",
             "coefficients" : "1",
             "weights" : "0"
            }
          ]
        }
      }
    }
  }
}


public static GetWbkMdResult GetWbkResults(WbkId wbk)
{// Задаём параметры выполнения операции
    var tOp = new GetWbkMd
    {
        tWbk = wbk,
        tArg = new GetWbkMdArg
        {// Задаём шаблон извлечения данных
            pattern = new WbkMdPattern
            {
                results = new LnResultsPattern()
                {
                    coefficients = true,
                    correlation = true,
                    weights = true,
                    tabSheet = false,
                    series = null
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var gRes = somClient.GetWbkMd(tOp);
    LnResults res = gRes.meta.results;
    foreach (LnResult it in res.its)
    {
        Console.WriteLine("Ряд: " + it.n);
        Console.WriteLine("".PadRight(3) + "- коэффициенты доступны: " + it.coefficients);
        Console.WriteLine("".PadRight(3) + "- матрица корреляции доступна: " + it.correlation);
        Console.WriteLine("".PadRight(3) + "- веса доступны: " + it.weights);
        Console.WriteLine("");
    }
    return gRes;
}


См. также:


[Работа
 с базой данных временных рядов](../TimeSeriesDatabase_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
