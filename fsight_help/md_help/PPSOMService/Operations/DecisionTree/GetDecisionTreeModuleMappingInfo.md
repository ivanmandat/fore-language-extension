# GetDecisionTreeModuleMappingInfo: Операция

GetDecisionTreeModuleMappingInfo: Операция
-


**


# GetDecisionTreeModuleMappingInfo


## Синтаксис


GetDecisionTreeModuleMappingInfoResult GetDecisionTreeModuleMappingInfo(OdId
 tBlock)


## Параметры


tBlock. Моникёр
 блока действий дерева решений.


## Описание


Операция GetDecisionTreeModuleMappingInfo
 получает информацию о входных/выходных параметрах процедуры/функции, которую
 выполняет блок действий.


## Комментарии


Для выполнения операции укажите в поле tBlock
 моникёр экземпляра дерева решений с постфиксом «!Blocks!<идентификатор
 блока>» для работы с блоком действий. Моникёр может быть получен
 при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будут описания параметров, а также настройки
 связей с параметрами дерева решений.


## Пример


Ниже приведён пример получения информации о входных и выходных параметрах
 функции, на работу с которой настроен блок действий. В запросе передаётся
 моникёр блока действий. В ответе возвращается полученная информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDecisionTreeModuleMappingInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBlock xmlns="****">
  <id>JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D</id>  </tBlock>
  </GetDecisionTreeModuleMappingInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDecisionTreeModuleMappingInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<outputParameters xmlns="****">
[![](../../minus.gif)](../../#)<its>
  <name>Расстояние, км</name>  <type>2</type>  <isGlobal>1</isGlobal>  </its>
  </outputParameters>
[![](../../minus.gif)](../../#)<inputParameters xmlns="****">
[![](../../minus.gif)](../../#)<its>
  <name>IntParam</name>  <type>2</type>  </its>
  </inputParameters>
[![](../../minus.gif)](../../#)<parameterMappingLinks xmlns="****">
[![](../../minus.gif)](../../#)<its>
  <mappingLinkId>DT93A375ACA34746F59A8F212F1C72FD16</mappingLinkId>  <moduleParameterName>Расстояние, км</moduleParameterName>  <isActive>1</isActive>  <isGlobal>1</isGlobal>  <isUnsupported>0</isUnsupported>  </its>
  </parameterMappingLinks>
[![](../../minus.gif)](../../#)<inputParameterMappingLinks xmlns="****">
[![](../../minus.gif)](../../#)<its>
  <mappingLinkId>DT2B12A81CE5744D6A854052718273B308</mappingLinkId>  <moduleParameterName>IntParam</moduleParameterName>  <valueType>None</valueType>  <value />
  <isActive>1</isActive>  <isUnsupported>0</isUnsupported>  </its>
  </inputParameterMappingLinks>
  <result xmlns="****">1</result>  </GetDecisionTreeModuleMappingInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDecisionTreeModuleMappingInfo" :
  {
   "tBlock" :
    {
     "id" : "JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D"
    }
  }
}

### JSON-ответ:


{
 "GetDecisionTreeModuleMappingInfoResult" :
  {
   "outputParameters" :
    {
     "its" :
      {
       "name" : "Расстояние, км",
       "type" : "2",
       "isGlobal" : "1"
      }
    },
   "inputParameters" :
    {
     "its" :
      {
       "name" : "IntParam",
       "type" : "2"
      }
    },
   "parameterMappingLinks" :
    {
     "its" :
      {
       "mappingLinkId" : "DT93A375ACA34746F59A8F212F1C72FD16",
       "moduleParameterName" : "Расстояние, км",
       "isActive" : "1",
       "isGlobal" : "1",
       "isUnsupported" : "0"
      }
    },
   "inputParameterMappingLinks" :
    {
     "its" :
      {
       "mappingLinkId" : "DT2B12A81CE5744D6A854052718273B308",
       "moduleParameterName" : "IntParam",
       "valueType" : "None",
       "value" : "",
       "isActive" : "1",
       "isUnsupported" : "0"
      }
    },
   "result" : "1"
  }
}


public static GetDecisionTreeModuleMappingInfoResult GetDecisionTreeModuleMappingInfo(string treeMoniker, string blockId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDecisionTreeModuleMappingInfo()
    {
        tBlock = new OdId() { id = treeMoniker + "!Blocks!" + blockId }
    };
    // Получение информации о связях параметров
    var result = somClient.GetDecisionTreeModuleMappingInfo(tGet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
