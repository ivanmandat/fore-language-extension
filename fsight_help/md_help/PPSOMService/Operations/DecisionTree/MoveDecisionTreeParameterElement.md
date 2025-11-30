# MoveDecisionTreeParameterElement: Операция

MoveDecisionTreeParameterElement: Операция
-


**


# MoveDecisionTreeParameterElement


## Синтаксис


MoveDecisionTreeParameterElementResult MoveDecisionTreeParameterElement(OdId
 tParameter, MoveDecisionTreeParameterElementArg tArg)


## Параметры


tParameter. Моникёр
 параметра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция MoveDecisionTreeParameterElement
 перемещает элементы в списке элементов параметра дерева решений.


## Комментарии


Для выполнения операции укажите в поле tParameter
 моникёр параметра, отображающего список, а в поле tArg
 настройки, в соответствии с которыми будут перемещены элементы списка.
 Моникёр может быть получен при выполнении операции [GetDecisionTreeParameters](GetDecisionTreeParameters.htm),
 [AddDecisionTreeParameter](AddDecisionTreeParameter.htm).


Результатом выполнения операции будет признак успешного перемещения
 элементов.


## Пример


Ниже приведён пример перемещения элемента в списке элементов параметра
 дерева решений. В запросе передаётся моникёр параметра и настройки, в
 соответствии с которыми второй элемент должен быть перемещён на первую
 позицию. В ответе возвращается признак успешного перемещения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<MoveDecisionTreeParameterElement xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParameter xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT51067F939A51460286B6F7AF2467C88C</id>  </tParameter>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<indexesForMove>
  <it>1</it>  </indexesForMove>
  <destinationIndex>0</destinationIndex>  </tArg>
  </MoveDecisionTreeParameterElement>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<MoveDecisionTreeParameterElementResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </MoveDecisionTreeParameterElementResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "MoveDecisionTreeParameterElement" :
  {
   "tParameter" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC!Parameters!DT51067F939A51460286B6F7AF2467C88C"
    },
   "tArg" :
    {
     "indexesForMove" :
      {
       "it" : "1"
      },
     "destinationIndex" : "0"
    }
  }
}

### JSON-ответ:


{
 "MoveDecisionTreeParameterElementResult" :
  {
   "result" : "1"
  }
}


public static MoveDecisionTreeParameterElementResult MoveDTParameterElement(string paramMoniker, long[] indexFrom, long indexTo)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tMove = new MoveDecisionTreeParameterElement()
    {
        tArg = new MoveDecisionTreeParameterElementArg()
        {
            indexesForMove = indexFrom,
            destinationIndex = indexTo
        },
        tParameter = new OdId() { id = paramMoniker }
    };
    // Перемещение элементов в списке элементов параметра
    var result = somClient.MoveDecisionTreeParameterElement(tMove);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
