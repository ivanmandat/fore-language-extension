# GetDecisionTreeTermParameter: Операция

GetDecisionTreeTermParameter: Операция
-


**


# GetDecisionTreeTermParameter


## Синтаксис


DecisionTreeParameterResult GetDecisionTreeTermParameter(string
 mon, DecisionTreeTermParameterArgs tArg)


## Параметры


mon. Моникёр
 для работы с формулой в дереве решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDecisionTreeTermParameter
 получает параметр дерева решений, которому соответствует терм в формуле.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра дерева решений с постфиксом «!ExpMan»,
 а в поле tArg.formula формулу
 с термом.


Результатом выполнения операции будет полученная информация о параметре.


## Пример


Ниже приведён пример получения информации о параметре по его терму в
 формуле. В запросе передаётся моникёр для работы с формулой и формула,
 содержащая терм параметра. В ответе возвращается информация о параметре
 дерева решений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDecisionTreeTermParameter xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">IOFIGHIMAHHOFOAELNPDDKIJEJAIMLLELICHGMPGAHPIIMBK!M!S!CCADMAJIMAHHOFOAEBKIHFDJMNLKNMFGEFJOBDBNDGIECLPDO!ExpMan</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <formula>{DT2BC38F28F7A7441584301B3FCF2E48C5@1}</formula>  </tArg>
  </GetDecisionTreeTermParameter>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDecisionTreeTermParameterResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<parameter xmlns="****">
  <id>DT2BC38F28F7A7441584301B3FCF2E48C5</id>  <name>Поле ввода</name>  <description />
  <type>InputField</type>  <value>1</value>  <interactiveMode>WhenEmpty</interactiveMode>  <dimKey>-1</dimKey>  </parameter>
  </GetDecisionTreeTermParameterResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDecisionTreeTermParameter" :
  {
   "mon" : "IOFIGHIMAHHOFOAELNPDDKIJEJAIMLLELICHGMPGAHPIIMBK!M!S!CCADMAJIMAHHOFOAEBKIHFDJMNLKNMFGEFJOBDBNDGIECLPDO!ExpMan",
   "tArg" :
    {
     "formula" : "{DT2BC38F28F7A7441584301B3FCF2E48C5@1}"
    }
  }
}

### JSON-ответ:


{
 "GetDecisionTreeTermParameterResult" :
  {
   "parameter" :
    {
     "id" : "DT2BC38F28F7A7441584301B3FCF2E48C5",
     "name" : "Поле ввода",
     "description" : "",
     "type" : "InputField",
     "value" : "1",
     "interactiveMode" : "WhenEmpty",
     "dimKey" : "-1"
    }
  }
}


public static DecisionTreeParameterResult GetDecisionTreeTermParameter(string treeMoniker, string checkingFormula)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDecisionTreeTermParameter()
    {
        tArg = new DecisionTreeTermParameterArgs()
        {
            formula = checkingFormula
        },
        mon = treeMoniker + "!ExpMan"
    };
    // Получение информации о параметре
    var result = somClient.GetDecisionTreeTermParameter(tGet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
