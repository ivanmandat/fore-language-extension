# MoveDecisionTreeParameter: Операция

MoveDecisionTreeParameter: Операция
-


**


# MoveDecisionTreeParameter


## Синтаксис


MoveDecisionTreeParameterResult MoveDecisionTreeParameter(OdId
 tParent, MoveDecisionTreeParameterArg tArg)


## Параметры


tParent. Моникёр
 параметра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция MoveDecisionTreeParameter
 перемещает параметры в дереве решений.


## Комментарии


Для выполнения операции укажите в поле tParent
 моникёр экземпляра дерева решений, а в поле tArg
 настройки, в соответствии с которыми будут перемещены параметры. Моникёр
 может быть получен при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешного перемещения
 параметров.


## Пример


Ниже приведён пример перемещения параметра в дереве решений. В запросе
 передаётся моникёр экземпляра дерева решений и настройки, в соответствии
 с которыми второй параметр должен быть перемещён на первую позицию. В
 ответе возвращается признак успешного перемещения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<MoveDecisionTreeParameter xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParent xmlns="****">
  <id>LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC</id>  </tParent>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<indexesForMove>
  <its>1</its>  </indexesForMove>
  <destinationIndex>0</destinationIndex>  </tArg>
  </MoveDecisionTreeParameter>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<MoveDecisionTreeParameterResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </MoveDecisionTreeParameterResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "MoveDecisionTreeParameter" :
  {
   "tParent" :
    {
     "id" : "LGPBLHMAOIEMFOAEIMLFFHANLMAJNHOEFJDPIHDILKDPGJNA!M!S!CPNGGJMMAOIEMFOAEKDLJBIOEMBBMAGIEGKOBANBBBPGHINOC"
    },
   "tArg" :
    {
     "indexesForMove" :
      {
       "its" : "1"
      },
     "destinationIndex" : "0"
    }
  }
}

### JSON-ответ:


{
 "MoveDecisionTreeParameterResult" :
  {
   "result" : "1"
  }
}


public static MoveDecisionTreeParameterResult MoveDTParameter(string moniker, long[] indexFrom, long indexTo)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tMove = new MoveDecisionTreeParameter()
    {
        tArg = new MoveDecisionTreeParameterArg()
        {
            indexesForMove = indexFrom,
            destinationIndex = indexTo
        },
        tParent = new OdId() { id = moniker }
    };
    // Перемещение параметров
    var result = somClient.MoveDecisionTreeParameter(tMove);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
