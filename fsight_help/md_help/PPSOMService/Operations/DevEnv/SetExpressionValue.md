# SetExpressionValue: Операция

SetExpressionValue: Операция
-


**


# SetExpressionValue


## Синтаксис


SetExpressionValueResult SetExpressionValue(OdId
 tObject, SetExpressionValueArg tArg)


## Параметры


tObject. Моникёр
 объекта среды разработки, для которого запущен процесс отладки.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetExpressionValue
 изменяет значение выражения во время отладки кода.


## Комментарии


Операция позволяет изменить выражение, которое принимает значение просто
 типа данных. Для выполнения операции укажите в поле tObject
 моникёр объекта, находящегося в режиме отладки, а в поле tArg
 параметры изменения значения.


Результатом выполнения операции будет обновлённая информация о результате
 расчёта выражения.


## Пример


Ниже приведён пример изменения значения для выражения во время отладки
 кода. В запросе передаётся моникёр объекта, находящегося в режиме отладки,
 и изменяемое выражение с новым значением. В ответе возвращается обновлённая
 информация о выражении.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetExpressionValue xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>PBIOBPCAEDCOFOAEFFEFLOBMFDKGKIMENIGAAFCLHCNIIEAC!M!305559</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <expression>count</expression>  <newValue>50</newValue>  </tArg>
  </SetExpressionValue>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetExpressionValueResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<resultStruct xmlns="****">
  <name>count</name>  <className>System.Integer</className>  <value>50</value>  </resultStruct>
  </SetExpressionValueResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetExpressionValue" :
  {
   "tObject" :
    {
     "id" : "PBIOBPCAEDCOFOAEFFEFLOBMFDKGKIMENIGAAFCLHCNIIEAC!M!305559"
    },
   "tArg" :
    {
     "expression" : "count",
     "newValue" : "50"
    }
  }
}

### JSON-ответ:


{
 "SetExpressionValueResult" :
  {
   "resultStruct" :
    {
     "name" : "count",
     "className" : "System.Integer",
     "value" : "50"
    }
  }
}


public static SetExpressionValueResult SetExpressionValue(MbId mb, string modId, string evaluateExpression, string newExprValue)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetExpressionValue()
    {
        tArg = new SetExpressionValueArg()
        {
            expression = evaluateExpression,
            newValue = newExprValue
        },
        // Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Изменение значения
    var result = somClient.SetExpressionValue(tSet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
