# GetDecisionTreeParameter: Операция

GetDecisionTreeParameter: Операция
-


**


# GetDecisionTreeParameter


## Синтаксис


GetDecisionTreeParameterResult GetDecisionTreeParameter(OdId
 tParameter, GetDecisionTreeParameterArg tArg)


## Параметры


tParameter. Моникёр
 параметра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDecisionTreeParameter
 получает метаданные параметра дерева решений.


## Комментарии


Для выполнения операции укажите в поле tParameter
 моникёр параметра, а в поле tArg
 настройки, в соответствии с которыми будут получены метаданные. Моникёр
 может быть получен при выполнении операции [GetDecisionTreeParameters](GetDecisionTreeParameters.htm),
 [AddDecisionTreeParameter](AddDecisionTreeParameter.htm).


Результатом выполнения операции будут запрошенные метаданные параметра.


## Пример


Ниже приведён пример получения информации, необходимой для редактирования
 параметра дерева решений. В запросе передаётся моникёр параметра. В ответе
 возвращается полученная информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDecisionTreeParameter xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParameter xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT27D0B57E39324CC8A2C678D6514BECA1</id>  </tParameter>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <attributesPreset>ForEdit</attributesPreset>  <enumirateSubTypes>true</enumirateSubTypes>  </tArg>
  </GetDecisionTreeParameter>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDecisionTreeParameterResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>[![](../../minus.gif)](../../#)<parameter xmlns="****">
[![](../../minus.gif)](../../#)<attributes>
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT27D0B57E39324CC8A2C678D6514BECA1</id>  <name>Расстояние</name>  <description />
  <dimKey>-1</dimKey>  <type>InputField</type>  <interactiveMode>WhenEmpty</interactiveMode>  <selectionMode>SingleSelect</selectionMode>  <subType>2</subType>  <list />
  </attributes>
[![](../../minus.gif)](../../#)<subTypes>
[![](../../minus.gif)](../../#)<it>
  <type>2</type>  <name>Целое</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>3</type>  <name>Вещественное</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>1</type>  <name>Текст</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>7</type>  <name>Дата</name>  </it>
  </subTypes>
  </parameter>
  </GetDecisionTreeParameterResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDecisionTreeParameter" :
  {
   "tParameter" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT27D0B57E39324CC8A2C678D6514BECA1"
    },
   "tArg" :
    {
     "attributesPreset" : "ForEdit",
     "enumirateSubTypes" : "true"
    }
  }
}

### JSON-ответ:


{
 "GetDecisionTreeParameterResult" :
  {
   "result" : "1",
   "parameter" :
    {
     "attributes" :
      {
       "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT27D0B57E39324CC8A2C678D6514BECA1",
       "name" : "Расстояние",
       "description" : "",
       "dimKey" : "-1",
       "type" : "InputField",
       "interactiveMode" : "WhenEmpty",
       "selectionMode" : "SingleSelect",
       "subType" : "2",
       "list" : ""
      },
     "subTypes" :
      {
       "it" :
        [
          {
           "type" : "2",
           "name" : "Целое"
          },
          {
           "type" : "3",
           "name" : "Вещественное"
          },
          {
           "type" : "1",
           "name" : "Текст"
          },
          {
           "type" : "7",
           "name" : "Дата"
          }
        ]
      }
    }
  }
}


public static GetDecisionTreeParameterResult GetDTParameter(string paramMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDecisionTreeParameter()
    {
        tArg = new GetDecisionTreeParameterArg()
        {
            attributesList = null,
            attributesPreset = DecisionTreeParameterAttributesPreset.ForEdit,
            enumirateSubTypes = true
        },
        tParameter = new OdId() { id = paramMoniker }
    };
    // Получение информации о параметре дерева решений
    var result = somClient.GetDecisionTreeParameter(tGet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
