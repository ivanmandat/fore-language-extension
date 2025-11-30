# AddDecisionTreeParameterElement: Операция

AddDecisionTreeParameterElement: Операция
-


**


# AddDecisionTreeParameterElement


## Синтаксис


AddDecisionTreeParameterElementResult AddDecisionTreeParameterElement(OdId
 tParameter, AddDecisionTreeParameterElementArg tArg)


## Параметры


tParameter. Моникёр
 параметра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция AddDecisionTreeParameterElement
 добавляет элемент в список элементов параметра дерева решений.


## Комментарии


Для выполнения операции укажите в поле tParameter
 моникёр параметра, отображающего список, а в поле tArg
 информацию о добавляемом элементе. Моникёр может быть получен при выполнении
 операции [GetDecisionTreeParameters](GetDecisionTreeParameters.htm),
 [AddDecisionTreeParameter](AddDecisionTreeParameter.htm).


Результатом выполнения операции будет признак успешного добавления элемента.


## Пример


Ниже приведён пример добавления элемента в список элементов параметра.
 В запросе передаётся моникёр параметра, отображающего список, и информация
 о добавляемом элементе. В ответе возвращается признак успешного добавления
 элемента.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<AddDecisionTreeParameterElement xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParameter xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT51067F939A51460286B6F7AF2467C88C</id>  </tParameter>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <value>Максимум</value>  <insertIndex>-1</insertIndex>  </tArg>
  </AddDecisionTreeParameterElement>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<AddDecisionTreeParameterElementResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </AddDecisionTreeParameterElementResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddDecisionTreeParameterElement" :
  {
   "tParameter" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT51067F939A51460286B6F7AF2467C88C"
    },
   "tArg" :
    {
     "value" : "Максимум",
     "insertIndex" : "-1"
    }
  }
}

### JSON-ответ:


{
 "AddDecisionTreeParameterElementResult" :
  {
   "result" : "1"
  }
}


public static AddDecisionTreeParameterElementResult AddDTParameterElement(string paramMoniker, string elementValue, long position)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new AddDecisionTreeParameterElement()
    {
        tParameter = new OdId()
        {
            id = paramMoniker
        },
        tArg = new AddDecisionTreeParameterElementArg()
        {
            value = elementValue,
            insertIndex = position
        }
    };
    // Добавление элемента в список элементов параметра
    var result = somClient.AddDecisionTreeParameterElement(tAdd);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
