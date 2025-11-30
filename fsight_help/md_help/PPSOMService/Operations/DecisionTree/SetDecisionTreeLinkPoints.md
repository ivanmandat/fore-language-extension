# SetDecisionTreeLinkPoints: Операция

SetDecisionTreeLinkPoints: Операция
-


**


# SetDecisionTreeLinkPoints


## Синтаксис


DecisionTreeLinkPointsResult SetDecisionTreeLinkPoints(string
 tTree, DecisionTreeLinkPointsArgs tArg)


## Параметры


tTree. Моникёр
 открытого экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDecisionTreeLinkPoints
 задаёт коллекции точек для определения форм линий связи.


## Комментарии


Для выполнения операции определите в поле tTree
 моникёр экземпляра дерева решений, а в поле tArg
 задайте коллекции точек для определения форм линий связи. Моникёр открытого
 экземляра дерева решений можно получить при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешной установки точек
 для определения формы линии связи.


## Пример


Ниже приведён пример задания коллекции точек для определения формы линии
 связи. В запросе передаётся моникёр экземпляра дерева решений, идентификатор
 линии связи и коллекция точек. В ответе возвращается признак успешного
 выполнения операции.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDecisionTreeLinkPoints xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <tTree xmlns="****">KMHNLNKPNEPLFOAEPLBOLKBAKGHEOADEFJKPDGFACCOEDMGA!M!S!CNENCLFLPNEPLFOAEJIPCAEONJNIANMCEPICMKLDGOCPGBOGO</tTree>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<points>
[![](../../minus.gif)](../../#)<it>
  <linkId>DT26BD67941D9043CCAF45B44A65F6FDC2</linkId>[![](../../minus.gif)](../../#)<points>
[![](../../minus.gif)](../../#)<it>
  <x>100</x>  <y>100</y>  </it>
[![](../../minus.gif)](../../#)<it>
  <x>120</x>  <y>120</y>  </it>
[![](../../minus.gif)](../../#)<it>
  <x>50</x>  <y>50</y>  </it>
  </points>
  <version>1</version>  </it>
  </points>
  </tArg>
  </SetDecisionTreeLinkPoints>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDecisionTreeLinkPointsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetDecisionTreeLinkPointsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDecisionTreeLinkPoints" :
  {
   "tTree" : "KMHNLNKPNEPLFOAEPLBOLKBAKGHEOADEFJKPDGFACCOEDMGA!M!S!CNENCLFLPNEPLFOAEJIPCAEONJNIANMCEPICMKLDGOCPGBOGO",
   "tArg" :
    {
     "points" :
      {
       "it" :
        {
         "linkId" : "DT26BD67941D9043CCAF45B44A65F6FDC2",
         "points" :
          {
           "it" :
            [
              {
               "x" : "100",
               "y" : "100"
              },
              {
               "x" : "120",
               "y" : "120"
              },
              {
               "x" : "50",
               "y" : "50"
              }
            ]
          },
         "version" : "1"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetDecisionTreeLinkPointsResult" :
  {
   "result" : "1"
  }
}


public static DecisionTreeLinkPointsResult SetDecisionTreeLinkPoints(string treeMoniker, string linkId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDecisionTreeLinkPoints()
    {
        tTree = treeMoniker,
        tArg = new DecisionTreeLinkPointsArgs()
        {
            points = new DecisionTreeLinkPoints[]
            {
                new DecisionTreeLinkPoints()
                {
                    linkId = linkId,
                    points = new PointF[]
                    {
                        new PointF(){ x = 100, y = 100 },
                        new PointF(){ x = 120, y = 120 },
                        new PointF(){ x = 50, y = 50 }
                    },
                    version = "1"
                }
            }
        }
    };
    // Изменение точек, определяющих форму линии связи
    var result = somClient.SetDecisionTreeLinkPoints(tSet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
