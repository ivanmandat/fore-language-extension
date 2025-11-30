# SetDecisionTreeModuleMappingParameterLinkAttributes: Операция

SetDecisionTreeModuleMappingParameterLinkAttributes: Операция
-


**


# SetDecisionTreeModuleMappingParameterLinkAttributes


## Синтаксис


SetDecisionTreeModuleMappingParameterLinkAttributesResult
 SetDecisionTreeModuleMappingParameterLinkAttributes(OdId tBlock, SetDecisionTreeModuleMappingParameterLinkAttributesArgs
 tArg)


## Параметры


tBlock. Моникёр
 блока действий дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDecisionTreeModuleMappingParameterLinkAttributes
 настраивает связь выходного параметра функции, которая выполняется в блоке
 действий, с параметром дерева решений.


## Комментарии


Для выполнения операции укажите в поле tBlock
 моникёр экземпляра дерева решений с постфиксом «!Blocks!<идентификатор
 блока>» для работы с действием, а в поле tArg
 определите настройки связи параметров. Моникёр может быть получен при
 выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешной настройки связи
 для выходного параметра функции.


## Пример


Ниже приведён пример настройки связи выходного параметра функции с параметром
 дерева решения. В запросе передаются все необходимые настройки. В ответе
 возвращается признак успешного изменения настроек связи.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDecisionTreeModuleMappingParameterLinkAttributes xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBlock xmlns="****">
  <id>JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D</id>  </tBlock>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<attributes>
  <mappingLinkId>DT93A375ACA34746F59A8F212F1C72FD16</mappingLinkId>  <decisionTreeParameterId>JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Parameters!DT5CC3FB67ED194425A54FC6B148B232B6</decisionTreeParameterId>  <isGlobal>true</isGlobal>  </attributes>
  </tArg>
  </SetDecisionTreeModuleMappingParameterLinkAttributes>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDecisionTreeModuleMappingParameterLinkAttributesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetDecisionTreeModuleMappingParameterLinkAttributesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDecisionTreeModuleMappingParameterLinkAttributes" :
  {
   "tBlock" :
    {
     "id" : "JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D"
    },
   "tArg" :
    {
     "attributes" :
      {
       "mappingLinkId" : "DT93A375ACA34746F59A8F212F1C72FD16",
       "decisionTreeParameterId" : "JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Parameters!DT5CC3FB67ED194425A54FC6B148B232B6",
       "isGlobal" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDecisionTreeModuleMappingParameterLinkAttributesResult" :
  {
   "result" : "1"
  }
}


public static SetDecisionTreeModuleMappingParameterLinkAttributesResult SetMappingOutputParameter(string treeMoniker, string blockId, string linkId, string dtParam)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDecisionTreeModuleMappingParameterLinkAttributes()
    {
        tArg = new SetDecisionTreeModuleMappingParameterLinkAttributesArgs()
        {
            attributes = new DecisionTreeModuleMappingParameterLinkAttributes()
            {
                mappingLinkId = linkId,
                decisionTreeParameterId = dtParam,
                isGlobal = true
            }
        },
        tBlock = new OdId() { id = treeMoniker + "!Blocks!" + blockId }
    };
    // Настройка связи выходного параметра функции
    var result = somClient.SetDecisionTreeModuleMappingParameterLinkAttributes(tSet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
