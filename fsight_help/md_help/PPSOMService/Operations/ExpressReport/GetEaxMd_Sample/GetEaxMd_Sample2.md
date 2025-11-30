# Получение параметров колонтитулов: Операция GetEaxMd

Получение параметров колонтитулов: Операция GetEaxMd
-


**


# Получение параметров колонтитулов


Ниже приведен пример использования операции [GetEaxMd](../GetEaxMd.htm)
 для получения параметров колонтитулов экспресс-отчета. В запросе передается
 моникёр открытого экземпляра экспресс-отчета и шаблон, указывающий необходимость
 получить информацию о верхнем и нижнем колонтитуле. В ответе возвращаются
 полученные параметры колонтитулов.


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


												  <header>true</header>


												  <footer>true</footer>


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
       "header" : "true",
       "footer" : "true"
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
         "height" : "10000",
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
         "text" : "Страница &[Page] из &[Pages]",
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
         "height" : "10000",
         "units" : "Mkm"
        }
      },
     "hasPivot" : "1"
    }
  }
}


    public static GetEaxMdResult GetPageHeader(EaxId moniker)
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
                    header = true,
                    footer = true
                }
            },
            tEax = moniker
        };
        //Получение информации о верхнем и нижнем колонтитуле
        var result = somClient.GetEaxMd(tEaxMd);
        return result;
    }


См. также:


[GetEaxMd:
 Операция](../GetEaxMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
