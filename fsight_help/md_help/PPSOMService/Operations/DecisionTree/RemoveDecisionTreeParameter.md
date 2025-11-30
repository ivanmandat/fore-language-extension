# RemoveDecisionTreeParameter: Операция

RemoveDecisionTreeParameter: Операция
-


**


# RemoveDecisionTreeParameter


## Синтаксис


RemoveDecisionTreeParameterResult RemoveDecisionTreeParameter(OdId
 tParameter)


## Параметры


tParameter. Моникёр
 параметра дерева решений.


## Описание


Операция RemoveDecisionTreeParameter
 удаляет параметр в дереве решений.


## Комментарии


Для удаления параметра укажите в поле tParameter
 моникёр параметра. Моникёр может быть получен при выполнении операции
 [GetDecisionTreeParameters](GetDecisionTreeParameters.htm),
 [AddDecisionTreeParameter](AddDecisionTreeParameter.htm).


Результатом выполнения операции будет признак успешного удаления параметра.


## Пример


Ниже приведён пример удаления параметра дерева решений. В запросе передаётся
 моникёр удаляемого параметра. В ответе возвращается признак успешного
 удаления.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RemoveDecisionTreeParameter xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParameter xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!ModificationSessions!DT00C4C221886A485DB3DD0169413C5356!Parameters!DTC278B92CDB9441C78629D50CC692E6C3</id>  </tParameter>
  </RemoveDecisionTreeParameter>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<RemoveDecisionTreeParameterResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </RemoveDecisionTreeParameterResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveDecisionTreeParameter" :
  {
   "tParameter" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!ModificationSessions!DT00C4C221886A485DB3DD0169413C5356!Parameters!DTC278B92CDB9441C78629D50CC692E6C3"
    }
  }
}

### JSON-ответ:


{
 "RemoveDecisionTreeParameterResult" :
  {
   "result" : "1"
  }
}


public static RemoveDecisionTreeParameterResult RemoveDTParameter(string paramMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new RemoveDecisionTreeParameter()
    {
        tParameter = new OdId() { id = paramMoniker }
    };
    // Удаление параметра
    var result = somClient.RemoveDecisionTreeParameter(tDel);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
