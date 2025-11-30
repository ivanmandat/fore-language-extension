# Соединение двух точек фигур

Соединение двух точек фигур
-


**


# Соединение двух точек фигур


Ниже приведён пример использования операции [SetWspMd](../SetWspMd.htm)
 для соединения точки фигуры и точки линии связи. В запросе передаются
 идентификаторы фигуры, линии связи и индексы соединяемых точек. В ответе
 ни какой дополнительной информации не возвращается.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetWspMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWsp xmlns="****">
  <id>CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG</id>  </tWsp>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>[![](../../../minus.gif)](../../../#)<action>
  <GlueConnectionPoints>true</GlueConnectionPoints>  </action>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<GlueConnectionPoints>
  <shapeId1>Shape2</shapeId1>  <shapeId2>Shape4</shapeId2>  <Index1>0</Index1>  <Index2>0</Index2>  <AutoIndex>true</AutoIndex>  </GlueConnectionPoints>
  </meta>
  </tArg>
  </SetWspMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetWspMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG</id>  </id>
  <meta xmlns="****" />
  </SetWspMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetWspMd" :
  {
   "tWsp" :
    {
     "id" : "CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "action" :
        {
         "GlueConnectionPoints" : "true"
        }
      },
     "meta" :
      {
       "GlueConnectionPoints" :
        {
         "shapeId1" : "Shape2",
         "shapeId2" : "Shape4",
         "Index1" : "0",
         "Index2" : "0",
         "AutoIndex" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetWspMdResult" :
  {
   "id" :
    {
     "id" : "CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG"
    },
   "meta" : ""
  }
}


public static SetWspMdResult WspConnectShapes(string moniker, string shape , int poinIndex, string link, int linkPointIndex)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetWspMd()
    {
        tArg = new SetWspMdArg()
        {
            pattern = new WspMdPattern()
            {
                action = new IWrspWorkspaceAction()
                {
                    GlueConnectionPoints = true
                }
            },
            meta = new WspMd()
            {
                GlueConnectionPoints = new WspGlueConnectionPointsArgs()
                {
                    shapeId1 = shape,
                    Index1 = poinIndex,
                    shapeId2 = link,
                    Index2 = linkPointIndex,
                    AutoIndex = true
                }
            }
        },
        tWsp = new WspId() { id = moniker }
    };
    // Соединение точек
    var tResult = somClient.SetWspMd(tSet);
    return tResult;
}


См. также:


[Работа
 с рабочим пространством](../Wsp_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
