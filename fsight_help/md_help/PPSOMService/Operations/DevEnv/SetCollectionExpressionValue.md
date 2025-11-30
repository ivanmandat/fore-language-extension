# SetCollectionExpressionValue: Операция

SetCollectionExpressionValue: Операция
-


**


# SetCollectionExpressionValue


## Синтаксис


bool SetCollectionExpressionValue(OdId tObject,
 SetCollectionExpressionValueArg tArg)


## Параметры


tObject. Моникёр
 модуля, который запущен в режиме отладки.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetCollectionExpressionValue
 изменяет значение в выражении, принимающем множественные значения.


## Комментарии


Операция позволяет изменить одно из значений в массиве, матрице или
 коллекции. Для выполнения операции укажите в поле tObject
 моникёр объекта, находящегося в режиме отладки, а в поле tArg
 параметры изменения значения.


Результатом выполнения операции будет логическое значение true,
 если изменение значения завершилось успешно.


## Пример


Ниже приведён пример изменения значения в матрице. В запросе передаётся
 моникёр модуля, находящегося в режиме отладки, наименование переменной
 с матрицей, координаты и новое устанавливаемое значение. В ответе возвращаются
 признак успешного изменения значения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetCollectionExpressionValue xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>EDOPGFIAGFBOFOAENKGBHKMMBAJLIDKEDLEKONHMPDMJLCHN!M!305383</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <expression>newMatrix</expression>[![](../../minus.gif)](../../#)<key>
  <it>1</it>  <it>1</it>  </key>
  <value>1.234</value>  </tArg>
  </SetCollectionExpressionValue>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetCollectionExpressionValueResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetCollectionExpressionValueResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetCollectionExpressionValue" :
  {
   "tObject" :
    {
     "id" : "EDOPGFIAGFBOFOAENKGBHKMMBAJLIDKEDLEKONHMPDMJLCHN!M!305383"
    },
   "tArg" :
    {
     "expression" : "newMatrix",
     "key" :
      {
       "it" :
        [
          "1",
          "1"
        ]
      },
     "value" : "1.234"
    }
  }
}

### JSON-ответ:


{
 "SetCollectionExpressionValueResult" : "1"
}


public static bool SetCollectionExpressionValue(MbId mb, string modId, string evaluateExpression, string[] coord, string newValue)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetCollectionExpressionValue()
    {
        tArg = new SetCollectionExpressionValueArg()
        {
            expression = evaluateExpression
        },
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Изменение значения
    var result = somClient.SetCollectionExpressionValue(tSet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
