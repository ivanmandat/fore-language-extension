# EditDecisionTreeParameterElement: Операция

EditDecisionTreeParameterElement: Операция
-


**


# EditDecisionTreeParameterElement


## Синтаксис


EditDecisionTreeParameterElementResult EditDecisionTreeParameterElement(OdId
 tParameter, EditDecisionTreeParameterElementArg tArg)


## Параметры


tParameter. Моникёр
 параметра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция EditDecisionTreeParameterElement
 редактирует элемент в списке элементов параметра.


## Комментарии


Для выполнения операции укажите в поле tParameter
 моникёр параметра, отображающего список, а в поле tArg
 информацию о редактируемом элементе. Моникёр может быть получен при выполнении
 операции [GetDecisionTreeParameters](GetDecisionTreeParameters.htm),
 [AddDecisionTreeParameter](AddDecisionTreeParameter.htm).


Результатом выполнения операции будет признак успешного изменения элемента.


## Пример


Ниже приведён пример изменения элемента в список элементов параметра.
 В запросе передаётся моникёр параметра, отображающего список, и обновлённая
 информация об элементе. В ответе возвращается признак успешного изменения
 элемента.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<EditDecisionTreeParameterElement xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParameter xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT51067F939A51460286B6F7AF2467C88C</id>  </tParameter>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <index>0</index>  <value>Минимум</value>  </tArg>
  </EditDecisionTreeParameterElement>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<EditDecisionTreeParameterElementResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </EditDecisionTreeParameterElementResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "EditDecisionTreeParameterElement" :
  {
   "tParameter" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT51067F939A51460286B6F7AF2467C88C"
    },
   "tArg" :
    {
     "index" : "0",
     "value" : "Минимум"
    }
  }
}

### JSON-ответ:


{
 "EditDecisionTreeParameterElementResult" :
  {
   "result" : "1"
  }
}


public static EditDecisionTreeParameterElementResult EditDTParameterElement(string paramMoniker, string elementValue, long position)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tEdit = new EditDecisionTreeParameterElement()
    {
        tParameter = new OdId()
        {
            id = paramMoniker
        },
        tArg = new EditDecisionTreeParameterElementArg()
        {
            value = elementValue,
            index = position
        }
    };
    // Редактирование элемента в список элементов параметра
    var result = somClient.EditDecisionTreeParameterElement(tEdit);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
