# Изменение параметров колонтитулов: Операция SetEaxMd

Изменение параметров колонтитулов: Операция SetEaxMd
-


**


# Изменение параметров колонтитулов


Ниже приведен пример использования операции [SetEaxMd](../SetEaxMd.htm)
 для изменения параметров колонтитулов. В запросе передается моникёр открытого
 экземпляра экспресс-отчета, шаблон, указывающий необходимость изменить
 колонтитулы, и метаданные, содержащие параметры различных частей колонтитулов.
 Результатом работы операции является моникёр измененного экспресс-отчета.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../../minus.gif)](../../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../../minus.gif)](../../../#) <SetEaxMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../../minus.gif)](../../../#) <tEax
								 xmlns="** **">


										  <id>S1!M!S!E1</id>


									  </tEax>


								[![](../../../minus.gif)](../../../#) <tArg
								 xmlns="** **">


										[![](../../../minus.gif)](../../../#)
										 <pattern>


												  <obInst>false</obInst>


												  <header>true</header>


												  <footer>true</footer>


											  </pattern>


										[![](../../../minus.gif)](../../../#)
										 <meta>


												[![](../../../minus.gif)](../../../#) <header>


														[![](../../../minus.gif)](../../../#)
														 <right>


																  <text>&[Picture]</text>


																[![](../../../minus.gif)](../../../#)
																 <imageDocument
																 isShortcut="**false**">


																		  <i>PP_LOGO</i>


																		  <n>PP_logo.jpg</n>


																		  <k>245</k>


																		  <c>3329</c>


																		  <p>4294967295</p>


																		  <h>false</h>


																	  </imageDocument>


																  <imageAsBackground>true</imageAsBackground>


															  </right>


														[![](../../../minus.gif)](../../../#)
														 <margin>


																  <width>0</width>


																  <height>15</height>


																  <units>Mm</units>


															  </margin>


													  </header>


												[![](../../../minus.gif)](../../../#) <footer>


														[![](../../../minus.gif)](../../../#)
														 <center>


																  <textColor>#333366</textColor>


																  <text>Страница
																 &[Page]
																 из &[Pages]</text>


															  </center>


														[![](../../../minus.gif)](../../../#)
														 <margin>


																  <width>0</width>


																  <height>15</height>


																  <units>Mm</units>


															  </margin>


													  </footer>


											  </meta>


										[![](../../../minus.gif)](../../../#)
										 <metaGet>


												  <obInst>true</obInst>


												  <header>true</header>


												  <footer>true</footer>


											  </metaGet>


									  </tArg>


							  </SetEaxMd>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../../minus.gif)](../../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <soapenv:Body>


						[![](../../../minus.gif)](../../../#) <SetEaxMdResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								  <changedDims
								 xmlns="** **" />


								[![](../../../minus.gif)](../../../#) <id xmlns="** **">


										  <id>S1!M!S!E1</id>


									  </id>


								[![](../../../minus.gif)](../../../#) <meta
								 xmlns="** **">


										[![](../../../minus.gif)](../../../#)
										 <obInst>


												[![](../../../minus.gif)](../../../#) <obDesc isShortcut="**0**">


														  <i>EXPRESS_1</i>


														  <n>Экспресс-отчет</n>


														  <k>189</k>


														  <c>2561</c>


														  <p>182</p>


														  <h>0</h>


													  </obDesc>


											  </obInst>


										  <windowsPosition>Maximized</windowsPosition>


										[![](../../../minus.gif)](../../../#)
										 <header>


												[![](../../../minus.gif)](../../../#) <left>


														[![](../../../minus.gif)](../../../#)
														 <font>


																  <family>Arial</family>


																  <style
																 />


																[![](../../../minus.gif)](../../../#)
																 <size>


																		  <width>-1</width>


																		  <height>10</height>


																		  <units>DLU96</units>


																	  </size>


															  </font>


														  <textColor>#000000</textColor>


														  <imageAsBackground>0</imageAsBackground>


														[![](../../../minus.gif)](../../../#)
														 <imageSize>


																  <width>0</width>


																  <height>0</height>


																  <units>DLU96</units>


															  </imageSize>


													  </left>


												[![](../../../minus.gif)](../../../#) <center>


														[![](../../../minus.gif)](../../../#)
														 <font>


																  <family>Arial</family>


																  <style
																 />


																[![](../../../minus.gif)](../../../#)
																 <size>


																		  <width>-1</width>


																		  <height>10</height>


																		  <units>DLU96</units>


																	  </size>


															  </font>


														  <textColor>#000000</textColor>


														  <imageAsBackground>0</imageAsBackground>


														[![](../../../minus.gif)](../../../#)
														 <imageSize>


																  <width>0</width>


																  <height>0</height>


																  <units>DLU96</units>


															  </imageSize>


													  </center>


												[![](../../../minus.gif)](../../../#) <right>


														[![](../../../minus.gif)](../../../#)
														 <font>


																  <family>Arial</family>


																  <style
																 />


																[![](../../../minus.gif)](../../../#)
																 <size>


																		  <width>-1</width>


																		  <height>10</height>


																		  <units>DLU96</units>


																	  </size>


															  </font>


														  <textColor>#000000</textColor>


														  <text>&[Picture]</text>


														[![](../../../minus.gif)](../../../#)
														 <imageDocument isShortcut="**0**">


																  <i>PP_LOGO</i>


																  <n>PP_logo.jpg</n>


																  <k>245</k>


																  <c>3329</c>


																  <p>182</p>


																  <h>0</h>


															  </imageDocument>


														  <imageAsBackground>1</imageAsBackground>


														[![](../../../minus.gif)](../../../#)
														 <imageSize>


																  <width>14</width>


																  <height>5</height>


																  <units>DLU96</units>


															  </imageSize>


													  </right>


												[![](../../../minus.gif)](../../../#) <margin>


														  <width>-1</width>


														  <height>15000</height>


														  <units>Mkm</units>


													  </margin>


											  </header>


										[![](../../../minus.gif)](../../../#)
										 <footer>


												[![](../../../minus.gif)](../../../#) <left>


														[![](../../../minus.gif)](../../../#)
														 <font>


																  <family>Arial</family>


																  <style
																 />


																[![](../../../minus.gif)](../../../#)
																 <size>


																		  <width>-1</width>


																		  <height>10</height>


																		  <units>DLU96</units>


																	  </size>


															  </font>


														  <textColor>#000000</textColor>


														  <imageAsBackground>0</imageAsBackground>


														[![](../../../minus.gif)](../../../#)
														 <imageSize>


																  <width>0</width>


																  <height>0</height>


																  <units>DLU96</units>


															  </imageSize>


													  </left>


												[![](../../../minus.gif)](../../../#) <center>


														[![](../../../minus.gif)](../../../#)
														 <font>


																  <family>Arial</family>


																  <style
																 />


																[![](../../../minus.gif)](../../../#)
																 <size>


																		  <width>-1</width>


																		  <height>10</height>


																		  <units>DLU96</units>


																	  </size>


															  </font>


														  <textColor>#333366</textColor>


														  <text>Страница
														 &[Page] из
														 &[Pages]</text>


														  <imageAsBackground>0</imageAsBackground>


														[![](../../../minus.gif)](../../../#)
														 <imageSize>


																  <width>0</width>


																  <height>0</height>


																  <units>DLU96</units>


															  </imageSize>


													  </center>


												[![](../../../minus.gif)](../../../#) <right>


														[![](../../../minus.gif)](../../../#)
														 <font>


																  <family>Arial</family>


																  <style
																 />


																[![](../../../minus.gif)](../../../#)
																 <size>


																		  <width>-1</width>


																		  <height>10</height>


																		  <units>DLU96</units>


																	  </size>


															  </font>


														  <textColor>#000000</textColor>


														  <imageAsBackground>0</imageAsBackground>


														[![](../../../minus.gif)](../../../#)
														 <imageSize>


																  <width>0</width>


																  <height>0</height>


																  <units>DLU96</units>


															  </imageSize>


													  </right>


												[![](../../../minus.gif)](../../../#) <margin>


														  <width>-1</width>


														  <height>15000</height>


														  <units>Mkm</units>


													  </margin>


											  </footer>


									  </meta>


							  </SetEaxMdResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


{
 "Envelope" :
  {
   "Body" :
    {
     "SetEaxMd" :
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
           "header" : "true",
           "footer" : "true"
          },
         "meta" :

          {
           "header" :
            {
             "right" :
              {
               "text" : "&[Picture]",
               "imageDocument" :
                {
                 "@isShortcut" : "false",
                 "i" : "PP_LOGO",

                 "n" : "PP_logo.jpg",
                 "k" : "245",
                 "c" : "3329",
                 "p" : "4294967295",
                 "h" : "false"
                },
               "imageAsBackground" : "true"
              },
             "margin" :
              {

               "width" : "0",
               "height" : "15",
               "units" : "Mm"
              }
            },
           "footer" :
            {
             "center" :
              {
               "textColor" : "#333366",

               "text" : "Страница &[Page] из &[Pages]"
              },
             "margin" :
              {
               "width" : "0",
               "height" : "15",
               "units" : "Mm"
              }
            }
          },

         "metaGet" :
          {
           "obInst" : "true",
           "header" : "true",
           "footer" : "true"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "Envelope" :
  {
   "Body" :

    {
     "SetEaxMdResult" :
      {
       "changedDims" : "",
       "id" :
        {
         "id" : "S1!M!S!E1"
        },
       "meta" :
        {

         "obInst" :
          {
           "obDesc" :
            {
             "@isShortcut" : "0",
             "i" : "EXPRESS_1",
             "n" : "Экспресс-отчет",
             "k" : "189",
             "c" : "2561",
             "p" : "182",

             "h" : "0"
            }
          },
         "windowsPosition" : "Maximized",
         "header" :
          {
           "left" :
            {
             "font" :
              {

               "family" : "Arial",
               "style" : "",
               "size" :
                {
                 "width" : "-1",
                 "height" : "10",
                 "units" : "DLU96"
                }
              },
             "textColor" : "#000000",

             "imageAsBackground" : "0",
             "imageSize" :
              {
               "width" : "0",
               "height" : "0",
               "units" : "DLU96"
              }
            },
           "center" :
            {

             "font" :
              {
               "family" : "Arial",
               "style" : "",
               "size" :
                {
                 "width" : "-1",
                 "height" : "10",
                 "units" : "DLU96"
                }

              },
             "textColor" : "#000000",
             "imageAsBackground" : "0",
             "imageSize" :
              {
               "width" : "0",
               "height" : "0",
               "units" : "DLU96"
              }
            },

           "right" :
            {
             "font" :
              {
               "family" : "Arial",
               "style" : "",
               "size" :
                {
                 "width" : "-1",
                 "height" : "10",

                 "units" : "DLU96"
                }
              },
             "textColor" : "#000000",
             "text" : "&[Picture]",
             "imageDocument" :
              {
               "@isShortcut" : "0",
               "i" : "PP_LOGO",
               "n" : "PP_logo.jpg",

               "k" : "245",
               "c" : "3329",
               "p" : "182",
               "h" : "0"
              },
             "imageAsBackground" : "1",
             "imageSize" :
              {
               "width" : "14",
               "height" : "5",

               "units" : "DLU96"
              }
            },
           "margin" :
            {
             "width" : "-1",
             "height" : "15000",
             "units" : "Mkm"
            }
          },

         "footer" :
          {
           "left" :
            {
             "font" :
              {
               "family" : "Arial",
               "style" : "",
               "size" :
                {

                 "width" : "-1",
                 "height" : "10",
                 "units" : "DLU96"
                }
              },
             "textColor" : "#000000",
             "imageAsBackground" : "0",
             "imageSize" :
              {
               "width" : "0",

               "height" : "0",
               "units" : "DLU96"
              }
            },
           "center" :
            {
             "font" :
              {
               "family" : "Arial",
               "style" : "",

               "size" :
                {
                 "width" : "-1",
                 "height" : "10",
                 "units" : "DLU96"
                }
              },
             "textColor" : "#333366",
             "text" : "Страница &[Page] из &[Pages]",
             "imageAsBackground" : "0",

             "imageSize" :
              {
               "width" : "0",
               "height" : "0",
               "units" : "DLU96"
              }
            },
           "right" :
            {
             "font" :

              {
               "family" : "Arial",
               "style" : "",
               "size" :
                {
                 "width" : "-1",
                 "height" : "10",
                 "units" : "DLU96"
                }
              },

             "textColor" : "#000000",
             "imageAsBackground" : "0",
             "imageSize" :
              {
               "width" : "0",
               "height" : "0",
               "units" : "DLU96"
              }
            },
           "margin" :

            {
             "width" : "-1",
             "height" : "15000",
             "units" : "Mkm"
            }
          }
        }
      }
    }
  }
}


    public static SetEaxMdResult SetPageHeader(MbId mb, EaxId moniker)
    {
        var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tEaxMd = new SetEaxMd()
        {
            tArg = new SetEaxMdArg()
            {
                //Шаблон, в соответствии с которым будут изменяться метаданные
                pattern = new EaxMdPattern()
                {
                    obInst = false,
                    header = true,
                    footer = true
                },
                meta = new EaxMd()
                {
                    header = new EaxHeader() //Верхний колонтитул
                    {
                        right = new GxHeaderPart()
                        {
                            imageDocument = FindObjectById(mb, "PP7_LOGO"),
                            imageAsBackground = true,
                            text = "&[Picture]"
                        },
                        margin = new SizeU() { height= 15 }
                    },
                    footer = new EaxHeader() //Нижний колонтитул
                    {
                        center = new GxHeaderPart()
                        {
                            text = "Страница &[Page] из &[Pages]",
                            textColor = "#333366"
                        },
                        margin = new SizeU() { height = 15 }
                    }
                },
                metaGet = new EaxMdPattern() { footer = true, header = true }
            },
            tEax = moniker
        };
        //Изменение параметров колонтитулов
        var result = somClient.SetEaxMd(tEaxMd);
        return result;
    }


См. также:


[SetEaxMd:
 Операция](../SetEaxMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
