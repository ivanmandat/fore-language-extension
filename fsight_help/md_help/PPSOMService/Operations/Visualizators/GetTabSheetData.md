# GetTabSheetData: Операция

GetTabSheetData: Операция
-


**


# GetTabSheetData


## Синтаксис


GetTabSheetDataResult GetTabSheetData(TabSheetId
 tTabSheet, GetTabSheetDataArg tArg)


## Параметры


tTabSheet. Моникёр таблицы;


tArg. Параметры извлечения
 данных и метаданных.


## Описание


Операция GetTabSheetData извлекает
 данные и метаданные таблицы.


## Комментарии


Для выполнения операции необходимо в параметре tTabSheet
 указать моникёр таблицы, а в параметре tArg
 указать параметры извлечения данных и метаданных. Моникёр может быть сформирован
 на основании моникёра открытого экземпляра объекта, с таблицей которого
 осуществляется работа, по следующим правилам:


	- «Моникёр экземпляра экспресс-отчета»!Tab.
	 Таблица экспресс-отчета (если в экспресс-отчете один лист).


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Tab. Таблица заданного листа экспресс-отчета (если в
	 экспресс-отчете несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!Tab. Таблица рабочей книги (если в рабочей книге один
	 лист).


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Tab. Таблица заданного листа рабочей
	 книги (если в рабочей книги несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!CorrTab. Таблица с матрицей корреляции.


	- «Моникёр экземпляра рабочей
	 книги»!CoeffTab. Таблица с коэффициентами уравнения.


	- «Моникёр экземпляра рабочей
	 книги»!WeightsTab. Таблица с матрицей весов.


	- «Моникёр экземпляра регламентного
	 отчета»!Ключ листа. Таблица отдельного листа регламентного
	 отчета.


В поле tArg.pattern необходимо
 указать шаблон, в соответствии с которым будут извлекаться данные и метаданные.
 В поле tArg.range/ranges указывается
 диапазон(ы) ячеек, для которых будет выполнена операция. Также в поле
 tArg.action могут быть указаны
 дополнительные действия, которые будут выполнены в таблице при выполнении
 операции. Результатом работы операции будет запрошенная информация и результаты
 выполнения действий, если было определено поле tArg.action.


## Пример


Ниже приведен пример использования операции GetTabSheetData
 для получения данных указанного диапазона ячеек в таблице экспресс-отчёта.
 В запросе передается моникёр таблицы и шаблон для извлечения данных. В
 ответе приходят запрошенные данные.


	 SOAP  JSON C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../minus.gif)](../../#) <GetTabSheetData
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../minus.gif)](../../#) <tTabSheet
								 xmlns="** **">


										  <id>S1!M!S!E1!Tab</id>


									  </tTabSheet>


								[![](../../minus.gif)](../../#) <tArg
								 xmlns="** **">


										[![](../../minus.gif)](../../#)
										 <pattern>


												  <data>true</data>


												  <styles>Get</styles>


											  </pattern>


										[![](../../minus.gif)](../../#)
										 <range>


												  <left>1</left>


												  <top>1</top>


												  <width>4</width>


												  <height>1</height>


											  </range>


									  </tArg>


							  </GetTabSheetData>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <soapenv:Body>


						[![](../../minus.gif)](../../#) <GetTabSheetDataResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[![](../../minus.gif)](../../#) <id xmlns="** **">


										  <id>S1!M!S!E1!Tab</id>


									  </id>


								[![](../../minus.gif)](../../#) <sheet
								 xmlns="** **">


										[![](../../minus.gif)](../../#)
										 <TabSheetData>


												[![](../../minus.gif)](../../#) <Cells>


														[![](../../minus.gif)](../../#)
														 <Cell L="**1**" T="**1**" SI="**1**">


																  <CD
																 FT="**1,38**"
																 VT="**8**"
																 V="**1.38386357**"
																 />


															  </Cell>


														[![](../../minus.gif)](../../#)
														 <Cell L="**2**" T="**1**" SI="**2**">


																  <CD
																 FT="**1,35**"
																 VT="**8**"
																 V="**1.34838968**"
																 />


															  </Cell>


														[![](../../minus.gif)](../../#)
														 <Cell L="**3**" T="**1**" SI="**2**">


																  <CD
																 FT="**1,35**"
																 VT="**8**"
																 V="**1.34838968**"
																 />


															  </Cell>


														[![](../../minus.gif)](../../#)
														 <Cell L="**4**" T="**1**" SI="**2**">


																  <CD
																 FT="**1,35**"
																 VT="**8**"
																 V="**1.34838968**"
																 />


															  </Cell>


													  </Cells>


												[![](../../minus.gif)](../../#) <Styles>


														[![](../../minus.gif)](../../#)
														 <Style B="">


																  <Text
																 HA="**0**"
																 VA="**1**"
																 WW="**1**"
																 M="**7.56
																 5.67 7.56
																 5.67**"
																 />


																  <NumberFormat
																 F="**#,##0.00**"
																 FT="**1**"
																 />


																  <Fill
																 C="**#FFFFFF**"
																 />


																  <Font
																 F="**Arial**"
																 S="**8**"
																 C="**#000000**"
																 A="**0**"
																 />


																  <Borders
																 />


																  <Hyperlink
																 T=""
																 A=""
																 E="**false**"
																 C="**#000000**"
																 U="**true**"
																 ST="**false**"
																 HT="**0**"
																 />


															  </Style>


														[![](../../minus.gif)](../../#)
														 <Style B="">


																  <Text
																 HA="**0**"
																 VA="**1**"
																 WW="**1**"
																 M="**7.56
																 5.67 7.56
																 5.67**"
																 />


																  <NumberFormat
																 F="**#,##0.00**"
																 FT="**1**"
																 />


																  <Fill
																 C="**#FFFFFF**"
																 />


																  <Font
																 F="**Arial**"
																 S="**8**"
																 C="**#000000**"
																 A="**0**"
																 />


																[![](../../minus.gif)](../../#)
																 <Borders>


																		  <Border
																		 I="**2**"
																		 S="**0**"
																		 C="**#BBBBBB**"
																		 W="**2**"
																		 />


																		  <Border
																		 I="**3**"
																		 S="**0**"
																		 C="**#BBBBBB**"
																		 W="**2**"
																		 />


																	  </Borders>


																  <Hyperlink
																 T=""
																 A=""
																 E="**false**"
																 C="**#000000**"
																 U="**true**"
																 ST="**false**"
																 HT="**0**"
																 />


															  </Style>


														[![](../../minus.gif)](../../#)
														 <Style B="">


																  <Text
																 HA="**0**"
																 VA="**1**"
																 WW="**1**"
																 M="**7.56
																 5.67 7.56
																 5.67**"
																 />


																  <NumberFormat
																 F="**#,##0.00**"
																 FT="**1**"
																 />


																  <Fill
																 C="**#FFFFFF**"
																 />


																  <Font
																 F="**Arial**"
																 S="**8**"
																 C="**#000000**"
																 A="**0**"
																 />


																[![](../../minus.gif)](../../#)
																 <Borders>


																		  <Border
																		 I="**2**"
																		 S="**0**"
																		 C="**#BBBBBB**"
																		 W="**2**"
																		 />


																	  </Borders>


																  <Hyperlink
																 T=""
																 A=""
																 E="**false**"
																 C="**#000000**"
																 U="**true**"
																 ST="**false**"
																 HT="**0**"
																 />


															  </Style>


													  </Styles>


											  </TabSheetData>


									  </sheet>


							  </GetTabSheetDataResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabSheetData" :
  {
   "tTabSheet" :
    {
     "id" : "S1!M!S!E1!Tab"
    },
   "tArg" :
    {
     "pattern" :
      {
       "data" : "true",
       "styles" : "Get"
      },
     "range" :
      {
       "left" : "1",
       "top" : "1",
       "width" : "4",
       "height" : "1"
      }
    }
  }
}

### JSON-ответ:


{
 "GetTabSheetDataResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!E1!Tab"
    },
   "sheet" :
    {
     "TabSheetData" :
      {
       "Cells" :
        {
         "Cell" :
          [
            {
             "@T" : "1",
             "@L" : "1",
             "@SI" : "1",
             "CD" :
              {
               "@V" : "1.38386357",
               "@FT" : "1,38",
               "@VT" : "8"
              }
            },
            {
             "@T" : "1",
             "@L" : "2",
             "@SI" : "2",
             "CD" :
              {
               "@V" : "1.34838968",
               "@FT" : "1,35",
               "@VT" : "8"
              }
            },
            {
             "@T" : "1",
             "@L" : "3",
             "@SI" : "2",
             "CD" :
              {
               "@V" : "1.34838968",
               "@FT" : "1,35",
               "@VT" : "8"
              }
            },
            {
             "@T" : "1",
             "@L" : "4",
             "@SI" : "2",
             "CD" :
              {
               "@V" : "1.34838968",
               "@FT" : "1,35",
               "@VT" : "8"
              }
            }
          ]
        },
       "Styles" :
        {
         "Style" :
          [
            {
             "@B" : "",
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
             "Hyperlink" :
              {
               "@A" : "",
               "@C" : "#000000",
               "@T" : "",
               "@E" : "false",
               "@U" : "true",
               "@ST" : "false",
               "@HT" : "0"
              }
            },
            {
             "@B" : "",
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
             "Borders" :
              {
               "Border" :
                [
                  {
                   "@S" : "0",
                   "@C" : "#BBBBBB",
                   "@W" : "2",
                   "@I" : "2"
                  },
                  {
                   "@S" : "0",
                   "@C" : "#BBBBBB",
                   "@W" : "2",
                   "@I" : "3"
                  }
                ]
              },
             "Hyperlink" :
              {
               "@A" : "",
               "@C" : "#000000",
               "@T" : "",
               "@E" : "false",
               "@U" : "true",
               "@ST" : "false",
               "@HT" : "0"
              }
            },
            {
             "@B" : "",
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
             "Borders" :
              {
               "Border" :
                [
                  {
                   "@S" : "0",
                   "@C" : "#BBBBBB",
                   "@W" : "2",
                   "@I" : "2"
                  }
                ]
              },
             "Hyperlink" :
              {
               "@A" : "",
               "@C" : "#000000",
               "@T" : "",
               "@E" : "false",
               "@U" : "true",
               "@ST" : "false",
               "@HT" : "0"
              }
            }
          ]
        }
      }
    }
  }
}


public static GetTabSheetDataResult GetTabData(EaxId eax)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetTabSheetData()
    {
        tArg = new GetTabSheetDataArg()
        {
            pattern = new TabSheetPattern()
            {
                data = true,
                styles = ListOperation.Get
            },
            range = new TabRange()
            {
                left = 1,
                top = 1,
                height = 1,
                width = 4
            }
        },
        tTabSheet = new TabSheetId() { id = eax.id + "!Tab" }
    };
    // Получаем диаграмму
    var result = somClient.GetTabSheetData(tGet);
    return result;
}


См. также:


[Интерактивные
 визуальные компоненты](Visualizators_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
