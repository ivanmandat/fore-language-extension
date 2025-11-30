# AddDecisionTreeParameter: Операция

AddDecisionTreeParameter: Операция
-


**


# AddDecisionTreeParameter


## Синтаксис


AddDecisionTreeParameterResult AddDecisionTreeParameter(OdId
 tParent, AddDecisionTreeParameterArg tArg)


## Параметры


tParent. Моникёр
 сессии для изменения дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция AddDecisionTreeParameter
 добавляет параметр в дерево решений.


## Комментарии


Для выполнения операции укажите в поле tParent
 моникёр сессии для изменения дерева решений, а в поле tArg
 определите настройки создаваемого параметра. Моникёр сессии для изменения
 дерева решений может быть получен при выполнении операции [AddDecisionTreeModificationSession](AddDecisionTreeModificationSession.htm).


Результатом выполнения операции будет моникёр созданного параметра.


## Пример


Ниже приведён пример создания нового параметра в дереве решений. В запросе
 передаются базовые настройки создаваемого параметра. В ответе возвращается
 моникёр созданного параметра.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<AddDecisionTreeParameter xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParent xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!ModificationSessions!DT00C4C221886A485DB3DD0169413C5356</id>  </tParent>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<attributes>
  <id>P_VAL</id>  <name>Значение</name>  <type>InputField</type>  </attributes>
  </tArg>
  </AddDecisionTreeParameter>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<AddDecisionTreeParameterResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!ModificationSessions!DT00C4C221886A485DB3DD0169413C5356!Parameters!DTC278B92CDB9441C78629D50CC692E6C3</id>  <result xmlns="****">1</result>  </AddDecisionTreeParameterResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddDecisionTreeParameter" :
  {
   "tParent" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!ModificationSessions!DT00C4C221886A485DB3DD0169413C5356"
    },
   "tArg" :
    {
     "attributes" :
      {
       "id" : "P_VAL",
       "name" : "Значение",
       "type" : "InputField"
      }
    }
  }
}

### JSON-ответ:


{
 "AddDecisionTreeParameterResult" :
  {
   "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!ModificationSessions!DT00C4C221886A485DB3DD0169413C5356!Parameters!DTC278B92CDB9441C78629D50CC692E6C3",
   "result" : "1"
  }
}


public static AddDecisionTreeParameterResult AddDTParameter(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new AddDecisionTreeParameter()
    {
        tParent = new OdId()
        {
            id = moniker
        },
        tArg = new AddDecisionTreeParameterArg()
        {
            attributes = new DecisionTreeParameterAttributes()
            {
                name = "Значение",
                id = "P_VAL",
                type = StatEDecisionParameterType.InputField
            }
        }
    };
    // Создание параметра
    var result = somClient.AddDecisionTreeParameter(tAdd);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
