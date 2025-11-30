# SetDecisionTreeBlockPosition: Операция

SetDecisionTreeBlockPosition: Операция
-


**


# SetDecisionTreeBlockPosition


## Синтаксис


DecisionTreeBlockPositionResult SetDecisionTreeBlockPosition(string
 mon, DecisionTreeBlockPositionArgs tArg)


## Параметры


mon. Моникёр
 открытого экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDecisionTreeBlockPosition
 изменяет расположение блоков в рабочей области дерева решений.


## Комментарии


Операция позволяет перемещать один или несколько блоков одновременно.
 Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра дерева решений, а в поле tArg
 параметры перемещения блоков. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешного выполнения перемещения.


## Пример


Ниже приведён пример перемещения блока дерева решений. В запросе передаётся
 моникёр открытого экземпляра дерева решений, идентификатор блока и его
 новые координаты. В ответе возвращается признак успешного перемещения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDecisionTreeBlockPosition xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">AFICGPLDGDOLFOAEOGFFEIKIKPBDMOKELJHHDJLKMHJBIKIM!M!S!CECEKLFMDGDOLFOAEFILDKCBENJBFCPDEHLKOLFPEAOBNODJC</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<Positions>
[![](../../minus.gif)](../../#)<it>
  <BlockId>DT25BD1F0E73CE4BE9B215F4FAAE321526</BlockId>[![](../../minus.gif)](../../#)<Position>
  <x>200</x>  <y>200</y>  </Position>
  </it>
  </Positions>
  </tArg>
  </SetDecisionTreeBlockPosition>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDecisionTreeBlockPositionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetDecisionTreeBlockPositionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDecisionTreeBlockPosition" :
  {
   "mon" : "AFICGPLDGDOLFOAEOGFFEIKIKPBDMOKELJHHDJLKMHJBIKIM!M!S!CECEKLFMDGDOLFOAEFILDKCBENJBFCPDEHLKOLFPEAOBNODJC",
   "tArg" :
    {
     "Positions" :
      {
       "it" :
        {
         "BlockId" : "DT25BD1F0E73CE4BE9B215F4FAAE321526",
         "Position" :
          {
           "x" : "200",
           "y" : "200"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetDecisionTreeBlockPositionResult" :
  {
   "result" : "1"
  }
}


public static DecisionTreeBlockPositionResult SetDecisionTreeBlockPosition(string treeMoniker, string blockId, PointF newCoord)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDecisionTreeBlockPosition()
    {
        mon = treeMoniker,
        tArg = new DecisionTreeBlockPositionArgs()
        {
            Positions = new DecisionTreeBlockPosition[]
            {
                new DecisionTreeBlockPosition()
                {
                    BlockId = blockId,
                    Position = newCoord
                }
            }
        }
    };
    // Перемещение блока
    var result = somClient.SetDecisionTreeBlockPosition(tSet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
