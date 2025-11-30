# RemoveDecisionTreeModuleMappingInputParameterLink: Операция

RemoveDecisionTreeModuleMappingInputParameterLink: Операция
-


**


# RemoveDecisionTreeModuleMappingInputParameterLink


## Синтаксис


RemoveDecisionTreeModuleMappingInputParameterLinkResult
 RemoveDecisionTreeModuleMappingInputParameterLink(OdId tBlock, RemoveDecisionTreeModuleMappingInputParameterLinkArgs
 tArg)


## Параметры


tBlock. Моникёр
 блока действий дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция RemoveDecisionTreeModuleMappingInputParameterLink
 удаляет связь входного параметра процедуры/функции, которая выполняется
 в блоке действий.


## Комментарии


Удаление связи может потребоваться, если была изменена сигнатура используемой
 процедуры/функции и связь с параметром более не актуальна.


Для выполнения операции укажите в поле tBlock
 моникёр экземпляра дерева решений с постфиксом «!Blocks!<идентификатор
 блока>» для работы с действием, а в поле tArg.mappingLinkId
 укажите идентификатор связи параметров, которую необходимо удалить. Моникёр
 может быть получен при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).
 Информацию о доступных связях параметров можно получить, используя операцию
 [GetDecisionTreeModuleMappingInfo](GetDecisionTreeModuleMappingInfo.htm).


Результатом выполнения операции будет признак успешного удаления связи.


## Пример


Ниже приведён пример удаления связи входного параметра процедуры/функции.
 В запросе передаётся идентификатор связи. В ответе возвращается признак
 успешного удаления.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RemoveDecisionTreeModuleMappingInputParameterLink xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBlock xmlns="****">
  <id>JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D</id>  </tBlock>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <mappingLinkId>DT2B12A81CE5744D6A854052718273B308</mappingLinkId>  </tArg>
  </RemoveDecisionTreeModuleMappingInputParameterLink>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<RemoveDecisionTreeModuleMappingInputParameterLinkResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </RemoveDecisionTreeModuleMappingInputParameterLinkResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveDecisionTreeModuleMappingInputParameterLink" :
  {
   "tBlock" :
    {
     "id" : "JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D"
    },
   "tArg" :
    {
     "mappingLinkId" : "DT2B12A81CE5744D6A854052718273B308"
    }
  }
}

### JSON-ответ:


{
 "RemoveDecisionTreeModuleMappingInputParameterLinkResult" :
  {
   "result" : "1"
  }
}


public static RemoveDecisionTreeModuleMappingInputParameterLinkResult RemoveMappingInputParameter(string treeMoniker, string blockId, string linkId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new RemoveDecisionTreeModuleMappingInputParameterLink()
    {
        tArg = new RemoveDecisionTreeModuleMappingInputParameterLinkArgs()
        {
            mappingLinkId = linkId
        },
        tBlock = new OdId() { id = treeMoniker + "!Blocks!" + blockId }
    };
    // Удаление настроек связи входного параметра процедуры/функции
    var result = somClient.RemoveDecisionTreeModuleMappingInputParameterLink(tDel);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
