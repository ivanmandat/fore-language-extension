# RemoveDecisionTreeModuleMappingParameterLink: Операция

RemoveDecisionTreeModuleMappingParameterLink: Операция
-


**


# RemoveDecisionTreeModuleMappingParameterLink


## Синтаксис


RemoveDecisionTreeModuleMappingParameterLinkResult
 RemoveDecisionTreeModuleMappingParameterLink(OdId tBlock, RemoveDecisionTreeModuleMappingParameterLinkArgs
 tArg)


## Параметры


tBlock. Моникёр
 блока действий дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция RemoveDecisionTreeModuleMappingParameterLink
 удаляет связь выходного параметра функции, которая выполняется в блоке
 действий.


## Комментарии


Для выполнения операции укажите в поле tBlock
 моникёр экземпляра дерева решений с постфиксом «!Blocks!<идентификатор
 блока>» для работы с действием, а в поле tArg.mappingLinkId
 укажите идентификатор связи параметров, которую необходимо удалить. Моникёр
 может быть получен при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).
 Информацию о доступных связях параметров можно получить, используя операцию
 [GetDecisionTreeModuleMappingInfo](GetDecisionTreeModuleMappingInfo.htm).


Результатом выполнения операции будет признак успешного удаления связи.


## Пример


Ниже приведён пример удаления связи выходного параметра функции. В запросе
 передаётся идентификатор связи. В ответе возвращается признак успешного
 удаления.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RemoveDecisionTreeModuleMappingParameterLink xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBlock xmlns="****">
  <id>JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D</id>  </tBlock>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <mappingLinkId>DT93A375ACA34746F59A8F212F1C72FD16</mappingLinkId>  </tArg>
  </RemoveDecisionTreeModuleMappingParameterLink>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<RemoveDecisionTreeModuleMappingParameterLinkResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </RemoveDecisionTreeModuleMappingParameterLinkResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveDecisionTreeModuleMappingParameterLink" :
  {
   "tBlock" :
    {
     "id" : "JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D"
    },
   "tArg" :
    {
     "mappingLinkId" : "DT93A375ACA34746F59A8F212F1C72FD16"
    }
  }
}

### JSON-ответ:


{
 "RemoveDecisionTreeModuleMappingParameterLinkResult" :
  {
   "result" : "1"
  }
}


public static RemoveDecisionTreeModuleMappingParameterLinkResult RemoveMappingOutputParameter(string treeMoniker, string blockId, string linkId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new RemoveDecisionTreeModuleMappingParameterLink()
    {
        tArg = new RemoveDecisionTreeModuleMappingParameterLinkArgs()
        {
            mappingLinkId = linkId
        },
        tBlock = new OdId() { id = treeMoniker + "!Blocks!" + blockId }
    };
    // Удаление настроек связи выходного параметра функции
    var result = somClient.RemoveDecisionTreeModuleMappingParameterLink(tDel);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
