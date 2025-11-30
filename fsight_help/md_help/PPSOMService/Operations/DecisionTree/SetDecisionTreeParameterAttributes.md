# SetDecisionTreeParameterAttributes: Операция

SetDecisionTreeParameterAttributes: Операция
-


**


# SetDecisionTreeParameterAttributes


## Синтаксис


SetDecisionTreeParameterAttributesResult SetDecisionTreeParameterAttributes(OdId
 tParameter, SetDecisionTreeParameterAttributesArg tArg)


## Параметры


tParameter. Моникёр
 параметра.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDecisionTreeParameterAttributes
 редактирует настройки параметра дерева решений.


## Комментарии


Для выполнения операции укажите в поле tParameter
 моникёр параметра, а в поле tArg
 определите изменяемые настройки параметра. Моникёр параметра может быть
 получен при выполнении операции [GetDecisionTreeParameters](GetDecisionTreeParameters.htm),
 [AddDecisionTreeParameter](AddDecisionTreeParameter.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек параметра дерева решений. В
 запросе передаётся моникёр параметра и устанавливаемые настройки. В ответе
 возвращается признак успешного применения изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDecisionTreeParameterAttributes xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParameter xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!ModificationSessions!DT00C4C221886A485DB3DD0169413C5356!Parameters!DTC278B92CDB9441C78629D50CC692E6C3</id>  </tParameter>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<attributes>
  <description>Значение, используемое при расчёте</description>  <interactiveMode>Always</interactiveMode>  <subType>3</subType>  <precision>2</precision>  </attributes>
  </tArg>
  </SetDecisionTreeParameterAttributes>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDecisionTreeParameterAttributesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetDecisionTreeParameterAttributesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDecisionTreeParameterAttributes" :
  {
   "tParameter" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!ModificationSessions!DT00C4C221886A485DB3DD0169413C5356!Parameters!DTC278B92CDB9441C78629D50CC692E6C3"
    },
   "tArg" :
    {
     "attributes" :
      {
       "description" : "Значение, используемое при расчёте",
       "interactiveMode" : "Always",
       "subType" : "3",
       "precision" : "2"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDecisionTreeParameterAttributesResult" :
  {
   "result" : "1"
  }
}


public static SetDecisionTreeParameterAttributesResult EditDTParameter(string paramMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tEdit = new SetDecisionTreeParameterAttributes()
    {
        tParameter = new OdId()
        {
            id = paramMoniker
        },
        tArg = new SetDecisionTreeParameterAttributesArg()
        {
            attributes = new DecisionTreeParameterAttributes()
            {
                description = "Значение, используемое при расчёте",
                interactiveMode = DecisionTreeParameterInteractiveMode.Always,
                subType = 3,
                precision = 2
            }
        }
    };
    // Редактирование параметра
    var result = somClient.SetDecisionTreeParameterAttributes(tEdit);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
