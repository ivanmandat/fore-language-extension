# SemanticLayerDeletePattern: Операция

SemanticLayerDeletePattern: Операция
-


**


# SemanticLayerDeletePattern


## Синтаксис


bool SemanticLayerDeletePattern(string mon, SemanticLayerPatternArg
 tArg)


## Параметры


mon. Моникёр
 для работы с преднастроенными шаблонами подключения к СУБД.


tArg. Настройки удаляемого
 преднастроенного шаблона подключения к СУБД.


## Описание


Операция SemanticLayerDeletePattern
 удаляет преднастроенный шаблон подключения к СУБД.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных с постфиксом !Patterns,
 а в поле tArg.index ключ удаляемого
 шаблона. Моникёр может быть получен при выполнении операции [OpenSemanticLayer](OpenSemanticLayer.htm).
 Ключ шаблона будет доступен в результатах операции [SemanticLayerGetPatterns](SemanticLayerGetPatterns.htm).


Результатом операции будет логическое значение true,
 если удаление преднастроенного шаблона завершилась успешно.


## Пример


Ниже приведён пример удаления преднастроенного шаблона подключения к
 СУБД. В запросе передаётся моникёр для работы с преднастроенными шаблонами
 и ключ шаблона. В ответе возвращается признак успешного удаления.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SemanticLayerDeletePattern xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">KPACNCCOCDBDGOAEFDJDAIBAMJFFBCDEDJLPICPCMCFDIKCG!M!S!PLDNOFGCOCDBDGOAEMEKOCGKLAEFDMALEOIGKKCECKAAGLFHC!Patterns</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <index>358700</index>  </tArg>
  </SemanticLayerDeletePattern>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SemanticLayerDeletePatternResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SemanticLayerDeletePatternResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SemanticLayerDeletePattern" :
  {
   "mon" : "KPACNCCOCDBDGOAEFDJDAIBAMJFFBCDEDJLPICPCMCFDIKCG!M!S!PLDNOFGCOCDBDGOAEMEKOCGKLAEFDMALEOIGKKCECKAAGLFHC!Patterns",
   "tArg" :
    {
     "index" : "358700"
    }
  }
}

### JSON-ответ:


{
 "SemanticLayerDeletePatternResult" : "1"
}


public static bool SemanticLayerDeletePattern(string moniker, int? patternIndex)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new SemanticLayerDeletePattern()
    {
        tArg = new SemanticLayerPatternArg()
        {
            index = patternIndex
        },
        // Моникёр для работы с преднастроенными шаблонами
        mon = moniker + "!Patterns"
    };
    // Удаление преднастроенного шаблона
    var result = somClient.SemanticLayerDeletePattern(tDel);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
