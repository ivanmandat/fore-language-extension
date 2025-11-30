# Открытие экспресс-отчета с извлечением метаданных: Операция OpenEax

Открытие экспресс-отчета с извлечением метаданных: Операция OpenEax
-


**


# Открытие экспресс-отчета с извлечением метаданных


Ниже приведен пример использования операции [OpenEax](../OpenEax.htm)
 для открытия экспресс-отчета на редактирование. В запросе передается моникёр
 объекта, являющегося экспресс-отчетом, и шаблон, в соответствии с которым
 будут извлекаться метаданные. Отчет открывается на редактирование. В ответе
 приходит моникёр открытого экземпляра экспресс-отчета и указанные метаданные.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../../minus.gif)](../../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../../minus.gif)](../../../#) <OpenEax xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../../minus.gif)](../../../#) <tObject
								 xmlns="** **">


										  <id>S1!M!189</id>


									  </tObject>


								[![](../../../minus.gif)](../../../#) <tArg
								 xmlns="** **">


										[![](../../../minus.gif)](../../../#)
										 <args>


												  <openForEdit>true</openForEdit>


											  </args>


										[![](../../../minus.gif)](../../../#)
										 <metaGet>


												  <obInst>true</obInst>


												[![](../../../minus.gif)](../../../#) <table>


														  <cells>true</cells>


													  </table>


												  <title>true</title>


											  </metaGet>


									  </tArg>


							  </OpenEax>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../../minus.gif)](../../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../../minus.gif)](../../../#) <soapenv:Body>


						[![](../../../minus.gif)](../../../#) <OpenEaxResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


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


										[![](../../../minus.gif)](../../../#)
										 <table
										 rowCount="**4**"
										 columnCount="**3**">


												[![](../../../minus.gif)](../../../#) <cells>


														  <c
														 v="**89.237400**" dt="**3**" row="**0**" column="**0**" />


														  <c
														 v="**49.846103**" dt="**3**" row="**0**" column="**1**" />


														  <c
														 v="**24.467523**" dt="**3**" row="**0**" column="**2**" />


														  <c
														 v="**73.113754**" dt="**3**" row="**1**" column="**0**" />


														  <c
														 v="**48.060544**" dt="**3**" row="**1**" column="**1**" />


														  <c
														 v="**32.551410**" dt="**3**" row="**1**" column="**2**" />


														  <c
														 v="**74.107930**" dt="**3**" row="**2**" column="**0**" />


														  <c
														 v="**54.622097**" dt="**3**" row="**2**" column="**1**" />


														  <c
														 v="**29.370052**" dt="**3**" row="**2**" column="**2**" />


														  <c
														 v="**60.189477**" dt="**3**" row="**3**" column="**0**" />


														  <c
														 v="**17.439952**" dt="**3**" row="**3**" column="**1**" />


														  <c
														 v="**14.059756**" dt="**3**" row="**3**" column="**2**" />


													  </cells>


											  </table>


										  <windowsPosition>Maximized</windowsPosition>


										[![](../../../minus.gif)](../../../#)
										 <title>


												[![](../../../minus.gif)](../../../#) <font>


														  <family>Calibri</family>


														[![](../../../minus.gif)](../../../#)
														 <style>


																  <it>Regular</it>


															  </style>


														[![](../../../minus.gif)](../../../#)
														 <size>


																  <width>-1</width>


																  <height>12</height>


																  <units>DLU96</units>


															  </size>


													  </font>


												  <textColor>#000000</textColor>


												  <backgroundColor>#FFFFFF</backgroundColor>


												  <textAlignment>Near</textAlignment>


												[![](../../../minus.gif)](../../../#) <size>


														  <width>-1</width>


														  <height>24000</height>


														  <units>Mkm</units>


													  </size>


												  <visible>1</visible>


												  <xamlText><?xml version="1.0"
												 encoding="utf-16"?><TextBlock
												 FontFamily="Calibri"
												 FontStyle="Normal"
												 FontWeight="Bold"
												 FontSize="16"
												 Foreground="#FF000000"
												 Background="#FFFFFFFF"
												 TextAlignment="Left"
												 TextWrapping="Wrap"
												 FlowDirection="LeftToRight"
												 VerticalAlignment="Stretch"
												 xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"><Run
												 xml:lang="ru-ru">Данные
												 за два полугодия</Run></TextBlock></xamlText>


												  <xamlTitle><?xml version="1.0"
												 encoding="utf-16"?>
												 <TextBlock FontFamily="Calibri"
												 FontStyle="Normal"
												 FontWeight="Bold"
												 FontSize="16"
												 Foreground="#FF000000"
												 Background="#FFFFFFFF"
												 TextAlignment="Left"
												 TextWrapping="Wrap"
												 FlowDirection="LeftToRight"
												 VerticalAlignment="Stretch"
												 xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"><Run
												 xml:space="preserve"
												 xml:lang="ru-ru">Данные
												 за два полугодия</Run></TextBlock></xamlTitle>


											  </title>


									  </meta>


							  </OpenEaxResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenEax" :
  {
   "tObject" :

    {
     "id" : "S1!M!189"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true",
       "storeObject" : "true"
      },

     "metaGet" :
      {
       "obInst" : "true",
       "gridStyle" :
        {
         "all" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "OpenEaxResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!E3"
    },
   "meta" :
    {
     "obInst" :

      {
       "obDesc" :
        {
         "@isShortcut" : "0",
         "@isLink" : "0",
         "i" : "EXPRESS_1",
         "n" : "Экспресс-отчет",
         "k" : "189",
         "c" : "2561",
         "p" : "182",

         "h" : "0"
        }
      },
     "dirty" : "0",
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
         "internals" :
          {
           "Text" :
            {
             "@VA" : "1",
             "@HA" : "0",
             "@M" : "7.56 5.67 7.56 5.67",

             "@WW" : "1"
            },
           "NumberFormat" :
            {
             "@F" : "#,##0.00",
             "@FT" : "1"
            },
           "Font" :
            {
             "@A" : "0",

             "@S" : "9",
             "@C" : "#000000",
             "@F" : "Calibri"
            },
           "Borders" : "",
           "Hyperlink" : ""
          },
         "ABC" :
          {
           "Text" :

            {
             "@VA" : "-1",
             "@HA" : "-1",
             "@M" : "-3.78 -3.78 -3.78 -3.78",
             "@WW" : "-1"
            },
           "Fill" :
            {
             "@C" : "#CCFFCC"
            },

           "Font" :
            {
             "@A" : "0",
             "@S" : "8",
             "@C" : "#000000",
             "@F" : "Arial"
            },
           "Borders" : "",
           "Hyperlink" : ""
          },

         "ABCHeader" :
          {
           "Text" :
            {
             "@VA" : "-1",
             "@HA" : "-1",
             "@M" : "-3.78 -3.78 -3.78 -3.78",
             "@WW" : "-1"
            },
           "Font" :

            {
             "@A" : "0",
             "@B" : "true",
             "@S" : "8",
             "@C" : "#000000",
             "@F" : "Arial"
            },
           "Borders" : "",
           "Hyperlink" : ""
          },

         "highlightedCells" :
          {
           "Text" :
            {
             "@VA" : "-1",
             "@HA" : "-1",
             "@M" : "-3.78 -3.78 -3.78 -3.78",
             "@WW" : "-1"
            },
           "Font" :

            {
             "@A" : "0",
             "@B" : "true",
             "@S" : "8",
             "@C" : "#FF0000",
             "@F" : "Arial"
            },
           "Borders" : "",
           "Hyperlink" : ""
          },

         "changedCells" :
          {
           "Text" :
            {
             "@VA" : "-1",
             "@HA" : "-1",
             "@M" : "-3.78 -3.78 -3.78 -3.78",
             "@WW" : "-1"
            },
           "Font" :

            {
             "@A" : "0",
             "@B" : "true",
             "@S" : "8",
             "@C" : "#000000",
             "@F" : "Arial"
            },
           "Borders" : "",
           "Hyperlink" : ""
          },

         "virtualCells" :
          {
           "Text" :
            {
             "@VA" : "-1",
             "@HA" : "-1",
             "@M" : "-3.78 -3.78 -3.78 -3.78",
             "@WW" : "-1"
            },
           "Font" :

            {
             "@A" : "0",
             "@S" : "8",
             "@C" : "#000000",
             "@F" : "Arial"
            },
           "Borders" : "",
           "Hyperlink" : ""
          },
         "table" :

          {
           "Name" : "EAX table style",
           "Range" :
            {
             "left" : "0",
             "top" : "0",
             "width" : "0",
             "height" : "0"
            },
           "Corner" :

            {
             "Text" :
              {
               "@VA" : "-1",
               "@HA" : "-1",
               "@M" : "-3.78 -3.78 -3.78 -3.78",
               "@WW" : "-1"
              },
             "Fill" :
              {

               "@C" : "#DEE5F8"
              },
             "Font" :
              {
               "@A" : "0",
               "@S" : "8",
               "@C" : "#000000",
               "@F" : "Arial"
              },
             "Borders" : "",

             "Hyperlink" : ""
            },
           "FirstRow" :
            {
             "Width" : "1",
             "Style" :
              {
               "Text" :
                {
                 "@VA" : "-1",

                 "@HA" : "-1",
                 "@M" : "-3.78 -3.78 -3.78 -3.78",
                 "@WW" : "-1"
                },
               "Fill" :
                {
                 "@C" : "#FFFFFF"
                },
               "Font" :
                {

                 "@A" : "0",
                 "@S" : "8",
                 "@C" : "#000000",
                 "@F" : "Arial"
                },
               "Borders" : "",
               "Hyperlink" : ""
              }
            },
           "SecondRow" :

            {
             "Width" : "1",
             "Style" :
              {
               "Text" :
                {
                 "@VA" : "-1",
                 "@HA" : "-1",
                 "@M" : "-3.78 -3.78 -3.78 -3.78",
                 "@WW" : "-1"

                },
               "Fill" :
                {
                 "@C" : "#ECEFF6"
                },
               "Font" :
                {
                 "@A" : "0",
                 "@S" : "8",
                 "@C" : "#000000",

                 "@F" : "Arial"
                },
               "Borders" : "",
               "Hyperlink" : ""
              }
            },
           "FirstColumn" :
            {
             "Width" : "1"
            },

           "SecondColumn" :
            {
             "Width" : "1"
            },
           "HeaderRow" :
            {
             "Width" : "1",
             "Style" :
              {
               "Text" :

                {
                 "@VA" : "-1",
                 "@HA" : "-1",
                 "@M" : "-3.78 -3.78 -3.78 -3.78",
                 "@WW" : "-1"
                },
               "Fill" :
                {
                 "@C" : "#ECEFF6"
                },

               "Font" :
                {
                 "@A" : "0",
                 "@S" : "8",
                 "@C" : "#000000",
                 "@F" : "Arial"
                },
               "Borders" :
                {
                 "Border" :

                  [
                    {
                     "@S" : "0",
                     "@C" : "#BBBBBB",
                     "@I" : "2"
                    },
                    {
                     "@S" : "0",
                     "@C" : "#BBBBBB",
                     "@I" : "5"

                    },
                    {
                     "@S" : "0",
                     "@C" : "#FFFFFF",
                     "@I" : "6"
                    },
                    {
                     "@S" : "0",
                     "@C" : "#FFFFFF",
                     "@I" : "7"

                    }
                  ]
                },
               "Hyperlink" : ""
              }
            },
           "HeaderColumn" :
            {
             "Width" : "1",
             "Style" :

              {
               "Text" :
                {
                 "@VA" : "-1",
                 "@HA" : "-1",
                 "@M" : "-3.78 -3.78 -3.78 -3.78",
                 "@WW" : "-1"
                },
               "Fill" :
                {

                 "@C" : "#DEE5F8"
                },
               "Font" :
                {
                 "@A" : "0",
                 "@S" : "8",
                 "@C" : "#000000",
                 "@F" : "Arial"
                },
               "Borders" :

                {
                 "Border" :
                  [
                    {
                     "@S" : "0",
                     "@C" : "#BBBBBB",
                     "@I" : "3"
                    },
                    {
                     "@S" : "0",

                     "@C" : "#BBBBBB",
                     "@I" : "4"
                    },
                    {
                     "@S" : "0",
                     "@C" : "#FFFFFF",
                     "@I" : "6"
                    },
                    {
                     "@S" : "0",

                     "@C" : "#FFFFFF",
                     "@I" : "7"
                    }
                  ]
                },
               "Hyperlink" : ""
              }
            },
           "FooterRow" :
            {

             "Width" : "0"
            },
           "FooterColumn" :
            {
             "Width" : "0"
            },
           "PredefinedStyle" : "ExtDarkBlueStriped",
           "IsEmpty" : "0"
          },
         "calcs" : "",

         "internalFormatConditions" : "",
         "totalsFormatConditions" : "",
         "ABCFormatConditions" : "",
         "rangeFormatConditions" : ""
        }
      },
     "windowsPosition" : "Maximized",
     "hasPivot" : "1"
    }
  }
}


    public static OpenEaxResult OpenEaxEx(MbId mb, string eaxId, EaxMdPattern pattern)
    {
        var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tOpen = new OpenEax()
        {
            tArg = new OpenEaxArg()
            {
                args = new EaxOpenArgs() { openForEdit = true},
                //Шаблон, в соответствии с которым будут извлекаться метаданные
                metaGet = pattern
            },
            //Формирование моникера объекта
            tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, eaxId).k }
        };
        //Открытие экспресс-отчета
        var result = somClient.OpenEax(tOpen);
        return result;
    }


См. также:


[OpenEax:
 Операция](../OpenEax.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
