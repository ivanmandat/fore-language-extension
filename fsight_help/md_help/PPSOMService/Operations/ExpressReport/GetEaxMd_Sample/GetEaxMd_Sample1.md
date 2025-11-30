# Получение стилей оформления различных элементов таблицы: Операция GetEaxMd

Получение стилей оформления различных элементов таблицы: Операция GetEaxMd
-


**


# Получение стилей оформления различных элементов таблицы


Ниже приведен пример использования операции [GetEaxMd](../GetEaxMd.htm)
 для получения стилей оформления различных элементов таблицы. В запросе
 передается моникёр открытого экземпляра экспресс-отчета и шаблон, указывающий
 необходимость получить параметры стилей всех элементов. В ответе приходят
 параметры стилей оформления.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../../minus.gif)](../../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../../minus.gif)](../../../#) <GetEaxMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../../minus.gif)](../../../#) <tEax
								 xmlns="** **">


										  <id>S1!M!S!E1</id>


									  </tEax>


								[![](../../../minus.gif)](../../../#) <tArg
								 xmlns="** **">


										[![](../../../minus.gif)](../../../#)
										 <pattern>


												  <obInst>false</obInst>


												[![](../../../minus.gif)](../../../#) <gridStyle>


														[![](../../../minus.gif)](../../../#)
														 <parts>


																  <it>FixedCorner</it>


																  <it>TopHeader</it>


																  <it>LeftHeader</it>


															  </parts>


														[![](../../../minus.gif)](../../../#)
														 <ops>


																[![](../../../minus.gif)](../../../#)
																 <it>


																		  <Key>InternalFormatConditions</Key>


																		  <Value>Get</Value>


																	  </it>


															  </ops>


													  </gridStyle>


											  </pattern>


									  </tArg>


							  </GetEaxMd>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../../minus.gif)](../../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <soapenv:Body>


						[![](../../../minus.gif)](../../../#) <GetEaxMdResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[![](../../../minus.gif)](../../../#) <id xmlns="** **">


										  <id>S1!M!S!E1</id>


									  </id>


								[![](../../../minus.gif)](../../../#) <meta
								 xmlns="** **">


										[![](../../../minus.gif)](../../../#)
										 <grid>


												[![](../../../minus.gif)](../../../#) <style>


														[![](../../../minus.gif)](../../../#)
														 <fixedCorner>


																  <Text
																 HA="**-1**"
																 VA="**1**"
																 WW="**1**"
																 M="**7.56
																 5.67 7.56
																 5.67**"
																 />


																  <NumberFormat
																 F=""
																 FT="**0**"
																 />


																  <Font
																 F="**Calibri**"
																 S="**9**"
																 C="**#000000**"
																 A="**0**"
																 B="**true**"
																 />


																  <Borders
																 />


																  <Hyperlink
																 />


															  </fixedCorner>


														[![](../../../minus.gif)](../../../#)
														 <topHeader>


																  <Text
																 HA="**2**"
																 VA="**1**"
																 WW="**1**"
																 M="**7.56
																 5.67 7.56
																 5.67**"
																 />


																  <NumberFormat
																 F=""
																 FT="**0**"
																 />


																  <Font
																 F="**Calibri**"
																 S="**9**"
																 C="**#000000**"
																 A="**0**"
																 B="**true**"
																 />


																  <Borders
																 />


																  <Hyperlink
																 />


															  </topHeader>


														[![](../../../minus.gif)](../../../#)
														 <leftHeader>


																  <Text
																 HA="**1**"
																 VA="**1**"
																 WW="**1**"
																 M="**7.56
																 5.67 7.56
																 5.67**"
																 />


																  <NumberFormat
																 F=""
																 FT="**0**"
																 />


																  <Font
																 F="**Calibri**"
																 S="**9**"
																 C="**#000000**"
																 A="**0**"
																 B="**true**"
																 />


																  <Borders
																 />


																  <Hyperlink
																 />


															  </leftHeader>


														  <internalFormatConditions
														 />


													  </style>


											  </grid>


										  <windowsPosition>Maximized</windowsPosition>


										  <hasPivot>1</hasPivot>


									  </meta>


							  </GetEaxMdResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


{
 "GetEaxMd" :
  {
   "tEax" :
    {
     "id" : "S1!M!S!E1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "false",
       "gridStyle" :
        {
         "parts" :
          {
           "it" :
            [
              "FixedCorner",
              "TopHeader",
              "LeftHeader"
            ]
          },
         "ops" :
          {
           "it" :
            {
             "Key" : "InternalFormatConditions",
             "Value" : "Get"
            }
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetEaxMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!E1"
    },
   "meta" :
    {
     "grid" :
      {
       "style" :
        {
         "fixedCorner" :
          {
           "Text" :
            {
             "@VA" : "1",
             "@HA" : "-1",
             "@M" : "7.56 5.67 7.56 5.67",
             "@WW" : "1"
            },
           "NumberFormat" :
            {
             "@F" : "",
             "@FT" : "0"
            },
           "Font" :
            {
             "@A" : "0",
             "@B" : "true",
             "@S" : "9",
             "@C" : "#000000",
             "@F" : "Calibri"
            },
           "Borders" : "",
           "Hyperlink" : ""
          },
         "topHeader" :
          {
           "Text" :
            {
             "@VA" : "1",
             "@HA" : "2",
             "@M" : "7.56 5.67 7.56 5.67",
             "@WW" : "1"
            },
           "NumberFormat" :
            {
             "@F" : "",
             "@FT" : "0"
            },
           "Font" :
            {
             "@A" : "0",
             "@B" : "true",
             "@S" : "9",
             "@C" : "#000000",
             "@F" : "Calibri"
            },
           "Borders" : "",
           "Hyperlink" : ""
          },
         "leftHeader" :
          {
           "Text" :
            {
             "@VA" : "1",
             "@HA" : "1",
             "@M" : "7.56 5.67 7.56 5.67",
             "@WW" : "1"
            },
           "NumberFormat" :
            {
             "@F" : "",
             "@FT" : "0"
            },
           "Font" :
            {
             "@A" : "0",
             "@B" : "true",
             "@S" : "9",
             "@C" : "#000000",
             "@F" : "Calibri"
            },
           "Borders" : "",
           "Hyperlink" : ""
          },
         "internalFormatConditions" : ""
        }
      },
     "windowsPosition" : "Maximized",
     "hasPivot" : "1"
    }
  }
}


    public static EaxGridStyle GetEaxGridStyle(EaxId moniker)
    {
        var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tEaxMd = new GetEaxMd()
        {
            tArg = new GetEaxMdArg()
            {
                //Шаблон, в соответствии с которым будут извлекаться метаданные
                pattern = new EaxMdPattern()
                {
                    obInst = false,
                    gridStyle = new EaxGridStylePattern()
                    {
                        parts = new EaxGridStylePart[]
                        {
                            EaxGridStylePart.FixedCorner,
                            EaxGridStylePart.TopHeader,
                            EaxGridStylePart.LeftHeader
                        },
                        ops = new EaxGridStylePartListOpsIT[]
                        {
                           new EaxGridStylePartListOpsIT() { Key = EaxGridStylePart.InternalFormatConditions, Value = ListOperation.Get },
                        }
                    }
                }
            },
            tEax = moniker
        };
        //Получение информации о стилях различных элементов таблицы
        var result = somClient.GetEaxMd(tEaxMd);
        return result.meta.grid.style;
    }


См. также:


[GetEaxMd:
 Операция](../GetEaxMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
