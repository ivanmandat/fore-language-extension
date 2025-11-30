# SemanticLayerSetNamePattern: Операция

SemanticLayerSetNamePattern: Операция
-


**


# SemanticLayerSetNamePattern


## Синтаксис


bool SemanticLayerSetNamePattern(string mon, SemanticLayerPatternArg
 tArg)


## Параметры


mon. Моникёр
 для работы с преднастроенными шаблонами подключения к СУБД.


tArg. Настройки преднастроенного
 шаблона подключения к СУБД, который необходимо переименовать.


## Описание


Операция SemanticLayerSetNamePattern
 переименовывает преднастроенный шаблон подключения к СУБД.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных с постфиксом !Patterns,
 в поле tArg.index индекс шаблона,
 а в поле tArg.name новое наименование.
 Моникёр может быть получен при выполнении операции [OpenSemanticLayer](OpenSemanticLayer.htm).
 Индекс шаблона будет доступен в результатах операции [SemanticLayerGetPatterns](SemanticLayerGetPatterns.htm).


Результатом операции будет логическое значение true,
 если переименование преднастроенного шаблона завершилась успешно.


## Пример


Ниже приведён пример переименования преднастроенного шаблона подключения
 к СУБД. В запросе передаётся моникёр для работы с преднастроенными шаблонами,
 ключ шаблона и новое наименование. В ответе возвращается признак успешного
 переименования шаблона.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SemanticLayerSetNamePattern xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">KPACNCCOCDBDGOAEFDJDAIBAMJFFBCDEDJLPICPCMCFDIKCG!M!S!PLDNOFGCOCDBDGOAEMEKOCGKLAEFDMALEOIGKKCECKAAGLFHC!Patterns</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <index>358700</index>  <name>Подключение к DBServer</name>  </tArg>
  </SemanticLayerSetNamePattern>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SemanticLayerSetNamePatternResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SemanticLayerSetNamePatternResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SemanticLayerSetNamePattern" :
  {
   "mon" : "KPACNCCOCDBDGOAEFDJDAIBAMJFFBCDEDJLPICPCMCFDIKCG!M!S!PLDNOFGCOCDBDGOAEMEKOCGKLAEFDMALEOIGKKCECKAAGLFHC!Patterns",
   "tArg" :
    {
     "index" : "358700",
     "name" : "Подключение к DBServer"
    }
  }
}

### JSON-ответ:


{
 "SemanticLayerSetNamePatternResult" : "1"
}


public static bool SemanticLayerSetNamePattern(string moniker, int? patternIndex, string newName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SemanticLayerSetNamePattern()
    {
        tArg = new SemanticLayerPatternArg()
        {
            index = patternIndex,
            name = newName
        },
        // Моникёр для работы с преднастроенными шаблонами
        mon = moniker + "!Patterns"
    };
    // Переименование преднастроенного шаблона
    var result = somClient.SemanticLayerSetNamePattern(tSet);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
