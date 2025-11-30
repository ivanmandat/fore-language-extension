# SetDecisionTreeModuleMappingInputParameterLinkAttributes: Операция

SetDecisionTreeModuleMappingInputParameterLinkAttributes: Операция
-


**


# SetDecisionTreeModuleMappingInputParameterLinkAttributes


## Синтаксис


SetDecisionTreeModuleMappingInputParameterLinkAttributesResult
 SetDecisionTreeModuleMappingInputParameterLinkAttributes(OdId tBlock,
 SetDecisionTreeModuleMappingInputParameterLinkAttributesArgs tArg)


## Параметры


tBlock. Моникёр
 блока действий дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDecisionTreeModuleMappingInputParameterLinkAttributes
 настраивает связь входного параметра процедуры/функции, которая выполняется
 в блоке действий.


## Комментарии


Для выполнения операции укажите в поле tBlock
 моникёр экземпляра дерева решений с постфиксом «!Blocks!<идентификатор
 блока>» для работы с действием, а в поле tArg
 определите настройки связи параметров. Моникёр может быть получен при
 выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешной настройки связи
 для входного параметра процедуры/функции.


## Пример


Ниже приведён пример настройки связи входного параметра процедуры/функции
 с параметром дерева решения. В запросе передаются все необходимые настройки.
 В ответе возвращается признак успешного изменения настроек связи.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDecisionTreeModuleMappingInputParameterLinkAttributes xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBlock xmlns="****">
  <id>JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D</id>  </tBlock>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<attributes>
  <mappingLinkId>DT2B12A81CE5744D6A854052718273B308</mappingLinkId>  <valueType>Parameter</valueType>  <decisionTreeParameterId>JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Parameters!DT2BC38F28F7A7441584301B3FCF2E48C5</decisionTreeParameterId>  <isActive>true</isActive>  </attributes>
  </tArg>
  </SetDecisionTreeModuleMappingInputParameterLinkAttributes>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDecisionTreeModuleMappingInputParameterLinkAttributesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetDecisionTreeModuleMappingInputParameterLinkAttributesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDecisionTreeModuleMappingInputParameterLinkAttributes" :
  {
   "tBlock" :
    {
     "id" : "JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D"
    },
   "tArg" :
    {
     "attributes" :
      {
       "mappingLinkId" : "DT2B12A81CE5744D6A854052718273B308",
       "valueType" : "Parameter",
       "decisionTreeParameterId" : "JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Parameters!DT2BC38F28F7A7441584301B3FCF2E48C5",
       "isActive" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDecisionTreeModuleMappingInputParameterLinkAttributesResult" :
  {
   "result" : "1"
  }
}


public static SetDecisionTreeModuleMappingInputParameterLinkAttributesResult SetMappingInputParameter(string treeMoniker, string blockId, string linkId, string dtParam)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDecisionTreeModuleMappingInputParameterLinkAttributes()
    {
        tArg = new SetDecisionTreeModuleMappingInputParameterLinkAttributesArgs()
        {
            attributes = new DecisionTreeModuleMappingInputParameterLinkAttributes()
            {
                mappingLinkId = linkId,
                decisionTreeParameterId = dtParam,
                valueType = DecisionTreeInputParameterValueType.Parameter,
                isActive = true
            }
        },
        tBlock = new OdId() { id = treeMoniker + "!Blocks!" + blockId }
    };
    // Настройка связи входного параметра процедуры/функции
    var result = somClient.SetDecisionTreeModuleMappingInputParameterLinkAttributes(tSet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
