# RemoveDecisionTreeParameterElement: Операция

RemoveDecisionTreeParameterElement: Операция
-


**


# RemoveDecisionTreeParameterElement


## Синтаксис


RemoveDecisionTreeParameterElementResult RemoveDecisionTreeParameterElement(OdId
 tParameter, RemoveDecisionTreeParameterElementArg tArg)


## Параметры


tParameter. Моникёр
 параметра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция RemoveDecisionTreeParameterElement
 удаляет элементы из списка элементов параметра дерева решений.


## Комментарии


Для выполнения операции укажите в поле tParameter
 моникёр параметра, отображающего список, а в поле tArg
 информацию об удаляемых элементах. Моникёр может быть получен при выполнении
 операции [GetDecisionTreeParameters](GetDecisionTreeParameters.htm),
 [AddDecisionTreeParameter](AddDecisionTreeParameter.htm).


Результатом выполнения операции будет признак успешного удаления элементов.


## Пример


Ниже приведён пример удаления элементов из списка элементов параметра.
 В запросе передаётся моникёр параметра, отображающего список, и массив
 индексов позиций удаляемых элементов. В ответе возвращается признак успешного
 удаления элементов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RemoveDecisionTreeParameterElement xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParameter xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT51067F939A51460286B6F7AF2467C88C</id>  </tParameter>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<indexesForRemove>
  <it>0</it>  <it>1</it>  </indexesForRemove>
  </tArg>
  </RemoveDecisionTreeParameterElement>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<RemoveDecisionTreeParameterElementResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </RemoveDecisionTreeParameterElementResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveDecisionTreeParameterElement" :
  {
   "tParameter" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT51067F939A51460286B6F7AF2467C88C"
    },
   "tArg" :
    {
     "indexesForRemove" :
      {
       "it" :
        [
          "0",
          "1"
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "RemoveDecisionTreeParameterElementResult" :
  {
   "result" : "1"
  }
}


public static RemoveDecisionTreeParameterElementResult RemoveDTParameterElement(string paramMoniker, long[] position)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new RemoveDecisionTreeParameterElement()
    {
        tParameter = new OdId()
        {
            id = paramMoniker
        },
        tArg = new RemoveDecisionTreeParameterElementArg()
        {
            indexesForRemove = position
        }
    };
    // Удаление элементов из список элементов параметра
    var result = somClient.RemoveDecisionTreeParameterElement(tDel);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
