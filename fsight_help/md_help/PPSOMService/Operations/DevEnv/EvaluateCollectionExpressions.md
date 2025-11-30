# EvaluateCollectionExpressions: Операция

EvaluateCollectionExpressions: Операция
-


**


# EvaluateCollectionExpressions


## Синтаксис


EvaluateCollectionExpressionResult EvaluateCollectionExpressions(OdId
 tObject, EvaluateCollectionExpressionArg tArg)


## Параметры


tObject. Моникёр
 модуля, который запущен в режиме отладки.


tArg. Параметры выполнения
 операции.


## Описание


Операция EvaluateCollectionExpressions
 вычисляет выражение, результатом которого будет множество значений.


## Комментарии


Операция позволяет в режиме отладки вычислить выражение, результатом
 которого будет массив, матрица или коллекция значений. Для выполнения
 операции укажите в поле tObject
 моникёр объекта, находящегося в режиме отладки, а в поле tArg
 параметры вычисления выражения.


Результатом выполнения операции будет полученное множество значений
 и информация о измерениях, которые это множество формируют.


## Пример


Ниже приведён пример вычисления выражения, возвращающего множество значений.
 В запросе передаётся моникёр модуля, находящегося в режиме отладки, и
 вычисляемое выражение. В ответе возвращаются полученные значения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<EvaluateCollectionExpressions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>EDOPGFIAGFBOFOAENKGBHKMMBAJLIDKEDLEKONHMPDMJLCHN!M!305383</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <expression>ResultMatrix</expression>  </tArg>
  </EvaluateCollectionExpressions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<EvaluateCollectionExpressionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<matrixResult xmlns="****">
[![](../../minus.gif)](../../#)<dimensions>
  <it>3</it>  <it>4</it>  </dimensions>
[![](../../minus.gif)](../../#)<keys>
  <it>0</it>  <it>1</it>  <it>2</it>  <it>0</it>  <it>1</it>  <it>2</it>  <it>3</it>  </keys>
[![](../../minus.gif)](../../#)<values>
  <it>3.220628311244681</it>  <it>2.944056423817746</it>  <it>2.762968961482369</it>  <it>2.652021025262234</it>  <it>2.720724827798729</it>  <it>2.895596386255474</it>  <it>2.907073790668661</it>  <it>2.794850570948003</it>  <it>2.429964700486113</it>  <it>2.572954698507732</it>  <it>2.816530059500973</it>  <it>3.151924435162425</it>  </values>
  </matrixResult>
  </EvaluateCollectionExpressionsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "EvaluateCollectionExpressions" :
  {
   "tObject" :
    {
     "id" : "EDOPGFIAGFBOFOAENKGBHKMMBAJLIDKEDLEKONHMPDMJLCHN!M!305383"
    },
   "tArg" :
    {
     "expression" : "ResultMatrix"
    }
  }
}

### JSON-ответ:


{
 "EvaluateCollectionExpressionsResult" :
  {
   "matrixResult" :
    {
     "dimensions" :
      {
       "it" :
        [
          "3",
          "4"
        ]
      },
     "keys" :
      {
       "it" :
        [
          "0",
          "1",
          "2",
          "0",
          "1",
          "2",
          "3"
        ]
      },
     "values" :
      {
       "it" :
        [
          "3.220628311244681",
          "2.944056423817746",
          "2.762968961482369",
          "2.652021025262234",
          "2.720724827798729",
          "2.895596386255474",
          "2.907073790668661",
          "2.794850570948003",
          "2.429964700486113",
          "2.572954698507732",
          "2.816530059500973",
          "3.151924435162425"
        ]
      }
    }
  }
}


public static EvaluateCollectionExpressionResult EvaluateCollectionExpressions(MbId mb, string modId, string evaluateExpression)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new EvaluateCollectionExpressions()
    {
        tArg = new EvaluateCollectionExpressionArg()
        {
            expression = evaluateExpression
        },
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Вычисление выражения
    var result = somClient.EvaluateCollectionExpressions(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
