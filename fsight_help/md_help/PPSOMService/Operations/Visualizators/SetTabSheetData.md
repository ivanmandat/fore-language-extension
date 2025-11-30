# SetTabSheetData: Операция

SetTabSheetData: Операция
-


**


# SetTabSheetData


## Синтаксис


SetTabSheetDataResult SetTabSheetData(TabSheetId
 tTabSheet, SetTabSheetDataArg tArg)


## Параметры


tTabSheet. Моникёр таблицы;


tArg. Параметры изменения данных
 и метаданных.


## Описание


Операция SetTabSheetData изменяет
 данные и метаданные таблицы.


## Комментарии


Для выполнения операции необходимо в параметре tTabSheet
 указать моникёр таблицы, а в параметре tArg
 указать параметры изменения данных и метаданных. Моникёр может быть сформирован
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
 указать шаблон, в соответствии с которым будут изменяться данные или метаданные.
 Обновленные данные указываются в поле tArg.TabSheetData,
 метаданные - в поле tArg.metaData.
 Также в поле tArg.action могут
 быть указаны дополнительные действия, которые будут выполнены в таблице
 при выполнении операции. Если определено поле tArg.getArg,
 то результатом работы операции будут обновленные данные и метаданные,
 полученные после их изменения в таблице.


## Пример


Ниже приведен пример использования операции SetTabSheetData
 для изменения данных указанного диапазона ячеек в таблице экспресс-отчёта.
 В запросе передается моникёр таблицы, новые данные для диапазона и шаблон,
 указывающий на необходимость изменить данные ячеек. В ответе приходит
 обновленная информация о данных указанного диапазона ячеек.


	 SOAP  JSON C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../minus.gif)](../../#) <SetTabSheetData
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../minus.gif)](../../#) <tTabSheet
								 xmlns="** **">


										  <id>S1!M!S!E1!Tab</id>


									  </tTabSheet>


								[![](../../minus.gif)](../../#) <tArg
								 xmlns="** **">


										[![](../../minus.gif)](../../#)
										 <TabSheetData>


												[![](../../minus.gif)](../../#) <Cells>


														[![](../../minus.gif)](../../#)
														 <Cell SI="**1**" T="**1**" L="**1**">


																  <CD
																 FT=""
																 V="**13.8386357**"
																 VT="**8**"
																 />


															  </Cell>


														[![](../../minus.gif)](../../#)
														 <Cell SI="**2**" T="**1**" L="**2**">


																  <CD
																 FT=""
																 V="**13.4838968**"
																 VT="**8**"
																 />


															  </Cell>


														[![](../../minus.gif)](../../#)
														 <Cell SI="**2**" T="**1**" L="**3**">


																  <CD
																 FT=""
																 V="**13.4838968**"
																 VT="**8**"
																 />


															  </Cell>


														[![](../../minus.gif)](../../#)
														 <Cell SI="**2**" T="**1**" L="**4**">


																  <CD
																 FT=""
																 V="**13.4838968**"
																 VT="**8**"
																 />


															  </Cell>


													  </Cells>


											  </TabSheetData>


										[![](../../minus.gif)](../../#)
										 <range>


												  <left>1</left>


												  <top>1</top>


												  <width>4</width>


												  <height>1</height>


											  </range>


										[![](../../minus.gif)](../../#)
										 <setPattern>


												  <data>true</data>


											  </setPattern>


										[![](../../minus.gif)](../../#)
										 <getArg>


												[![](../../minus.gif)](../../#) <pattern>


														  <data>true</data>


													  </pattern>


												[![](../../minus.gif)](../../#) <range>


														  <left>1</left>


														  <top>1</top>


														  <width>4</width>


														  <height>1</height>


													  </range>


											  </getArg>


									  </tArg>


							  </SetTabSheetData>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <soapenv:Body>


						[![](../../minus.gif)](../../#) <SetTabSheetDataResult
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
																 FT="**13.8386357**"
																 VT="**8**"
																 V="**13.8386357**"
																 />


															  </Cell>


														[![](../../minus.gif)](../../#)
														 <Cell L="**2**" T="**1**" SI="**2**">


																  <CD
																 FT="**13.4838968**"
																 VT="**8**"
																 V="**13.4838968**"
																 />


															  </Cell>


														[![](../../minus.gif)](../../#)
														 <Cell L="**3**" T="**1**" SI="**2**">


																  <CD
																 FT="**13.4838968**"
																 VT="**8**"
																 V="**13.4838968**"
																 />


															  </Cell>


														[![](../../minus.gif)](../../#)
														 <Cell L="**4**" T="**1**" SI="**2**">


																  <CD
																 FT="**13.4838968**"
																 VT="**8**"
																 V="**13.4838968**"
																 />


															  </Cell>


													  </Cells>


											  </TabSheetData>


									  </sheet>


							  </SetTabSheetDataResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


{
 "SetTabSheetData" :
  {
   "tTabSheet" :
    {
     "id" : "S1!M!S!E1!Tab"
    },
   "tArg" :
    {
     "TabSheetData" :
      {
       "Cells" :
        {
         "Cell" :
          [
            {
             "@T" : "1",
             "@SI" : "1",
             "@L" : "1",
             "CD" :
              {
               "@V" : "13.8386357",
               "@FT" : "",
               "@VT" : "8"
              }
            },
            {
             "@T" : "1",
             "@SI" : "2",
             "@L" : "2",
             "CD" :
              {
               "@V" : "13.4838968",
               "@FT" : "",
               "@VT" : "8"
              }
            },
            {
             "@T" : "1",
             "@SI" : "2",
             "@L" : "3",
             "CD" :
              {
               "@V" : "13.4838968",
               "@FT" : "",
               "@VT" : "8"
              }
            },
            {
             "@T" : "1",
             "@SI" : "2",
             "@L" : "4",
             "CD" :
              {
               "@V" : "13.4838968",
               "@FT" : "",
               "@VT" : "8"
              }
            }
          ]
        }
      },
     "range" :
      {
       "left" : "1",
       "top" : "1",
       "width" : "4",
       "height" : "1"
      },
     "setPattern" :
      {
       "data" : "true"
      },
     "getArg" :
      {
       "pattern" :
        {
         "data" : "true"
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
}

### JSON-ответ:


{
 "SetTabSheetDataResult" :
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
               "@V" : "13.8386357",
               "@FT" : "13.8386357",
               "@VT" : "8"
              }
            },
            {
             "@T" : "1",
             "@L" : "2",
             "@SI" : "2",
             "CD" :
              {
               "@V" : "13.4838968",
               "@FT" : "13.4838968",
               "@VT" : "8"
              }
            },
            {
             "@T" : "1",
             "@L" : "3",
             "@SI" : "2",
             "CD" :
              {
               "@V" : "13.4838968",
               "@FT" : "13.4838968",
               "@VT" : "8"
              }
            },
            {
             "@T" : "1",
             "@L" : "4",
             "@SI" : "2",
             "CD" :
              {
               "@V" : "13.4838968",
               "@FT" : "13.4838968",
               "@VT" : "8"
              }
            }
          ]
        }
      }
    }
  }
}


public static SetTabSheetDataResult ChangeTabData(EaxId eax, TabRange range, TabData newData)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetTabSheetData()
    {
        tArg = new SetTabSheetDataArg()
        {
            setPattern = new TabSheetPattern()
            {
                data = true,
            },
            //Изменяемый диапазон ячеек
            range = range,
            //Новые данные ячеек
            TabSheetData = newData,
            getArg = new GetTabSheetDataArg()
            {
                pattern = new TabSheetPattern()
                {
                    data = true,
                },
                range = range
            }
        },
        tTabSheet = new TabSheetId() { id = eax.id + "!Tab" }
    };
    // Выполняем изменение диаграммы
    var result = somClient.SetTabSheetData(tSet);
    return result;
}


См. также:


[Интерактивные
 визуальные компоненты](Visualizators_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
