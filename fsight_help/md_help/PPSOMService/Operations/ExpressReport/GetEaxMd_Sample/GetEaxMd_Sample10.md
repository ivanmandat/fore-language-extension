# Получение значений статистических характеристик: Операция GetEaxMd

Получение значений статистических характеристик: Операция GetEaxMd
-


**


# Получение значений статистических характеристик


Ниже приведен пример использования операции [GetEaxMd](../GetEaxMd.htm)
 для получения значений статистических характеристик, рассчитанных на базе
 текущих значений в таблице. В запросе передается моникёр открытого экземпляра
 экспресс-отчета и шаблон, указывающий необходимость получить статистические
 характеристики. В ответе приходят значения статистических характеристик.
 Предполагается, что запрос информации о таблице уже производился.


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


												[![](../../../minus.gif)](../../../#) <statistics>


														  <includeAll>true</includeAll>


													  </statistics>


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
										 <statistics>


												[![](../../../minus.gif)](../../../#) <its>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>0</k>


																  <n>Среднее</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>46.998409</value>


																  <type>Average</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>1</k>


																  <n>Минимум</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>14.059756</value>


																  <type>Min</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>2</k>


																  <n>Максимум</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>89.000000</value>


																  <type>Max</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>3</k>


																  <n>Сумма</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>516.982495</value>


																  <type>Sum</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>4</k>


																  <n>Сумма
																 квадратов</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>30697.451418</value>


																  <type>SQ</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>5</k>


																  <n>Медиана</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>48.060544</value>


																  <type>Median</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>6</k>


																  <n>Мода</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>NaN</value>


																  <type>Mode</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>7</k>


																  <n>Вариация</n>


																  <vis>1</vis>


																  <nodeType>Category</nodeType>


																  <value
																 />


																  <category>Variations</category>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>8</k>


																  <n>Стандартное
																 отклонение</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>25.298413</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>7</k>


																	  </group>


																  <type>StdDev</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>9</k>


																  <n>Дисперсия</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>640.009686</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>7</k>


																	  </group>


																  <type>Disp</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>10</k>


																  <n>Размах</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>74.940244</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>7</k>


																	  </group>


																  <type>Range</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>11</k>


																  <n>Коэффицент
																 вариации</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>53.828233</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>7</k>


																	  </group>


																  <type>VarC</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>12</k>


																  <n>Форма</n>


																  <vis>1</vis>


																  <nodeType>Category</nodeType>


																  <value
																 />


																  <category>Form</category>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>13</k>


																  <n>Асимметрия</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>0.249688</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>12</k>


																	  </group>


																  <type>Skew</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>14</k>


																  <n>Эксцесс</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>-1.262159</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>12</k>


																	  </group>


																  <type>Kurt</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>15</k>


																  <n>Порядковые
																 статистики</n>


																  <vis>1</vis>


																  <nodeType>Category</nodeType>


																  <value
																 />


																  <category>OrderStatistics</category>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>16</k>


																  <n>Верхняя
																 дециль</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>74.107930</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>15</k>


																	  </group>


																  <type>HighDecile</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>17</k>


																  <n>Верхняя
																 квартиль</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>66.651615</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>15</k>


																	  </group>


																  <type>HighQuartile</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>18</k>


																  <n>Нижняя
																 квартиль</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>26.918788</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>15</k>


																	  </group>


																  <type>LowQuartile</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>19</k>


																  <n>Нижняя
																 дециль</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>17.439952</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>15</k>


																	  </group>


																  <type>LowDecile</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>20</k>


																  <n>Зависимость</n>


																  <vis>1</vis>


																  <nodeType>Category</nodeType>


																  <value
																 />


																  <category>Dependence</category>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>21</k>


																  <n>Автокорреляция
																 первого
																 порядка</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>-0.232893</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>20</k>


																	  </group>


																  <type>AutoCorrelation1</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>22</k>


																  <n>Описание
																 выборки</n>


																  <vis>1</vis>


																  <nodeType>Category</nodeType>


																  <value
																 />


																  <category>SamplingDescr</category>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>23</k>


																  <n>Количество</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>12.000000</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>22</k>


																	  </group>


																  <type>Count</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>24</k>


																  <n>Количество
																 числовых
																 значений</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>11.000000</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>22</k>


																	  </group>


																  <type>NumbersCount</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>25</k>


																  <n>Количество
																 непустых
																 значений</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>12.000000</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>22</k>


																	  </group>


																  <type>NonEmptyCount</type>


															  </it>


														[![](../../../minus.gif)](../../../#)
														 <it>


																  <k>26</k>


																  <n>Количество
																 пустых
																 значений</n>


																  <vis>1</vis>


																  <nodeType>Statistics</nodeType>


																  <value>0</value>


																[![](../../../minus.gif)](../../../#)
																 <group>


																		  <k>22</k>


																	  </group>


																  <type>EmptyCount</type>


															  </it>


													  </its>


											  </statistics>


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
       "statistics" :
        {
         "includeAll" : "true"
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
     "windowsPosition" : "Maximized",
     "statistics" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "0",

             "n" : "Среднее",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "46.998409",
             "type" : "Average"
            },
            {
             "k" : "1",
             "n" : "Минимум",
             "vis" : "1",

             "nodeType" : "Statistics",
             "value" : "14.059756",
             "type" : "Min"
            },
            {
             "k" : "2",
             "n" : "Максимум",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "89.000000",

             "type" : "Max"
            },
            {
             "k" : "3",
             "n" : "Сумма",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "516.982495",
             "type" : "Sum"
            },

            {
             "k" : "4",
             "n" : "Сумма квадратов",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "30697.451418",
             "type" : "SQ"
            },
            {
             "k" : "5",

             "n" : "Медиана",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "48.060544",
             "type" : "Median"
            },
            {
             "k" : "6",
             "n" : "Мода",
             "vis" : "1",

             "nodeType" : "Statistics",
             "value" : "NaN",
             "type" : "Mode"
            },
            {
             "k" : "7",
             "n" : "Вариация",
             "vis" : "1",
             "nodeType" : "Category",
             "value" : "",

             "category" : "Variations"
            },
            {
             "k" : "8",
             "n" : "Стандартное отклонение",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "25.298413",
             "group" :
              {

               "k" : "7"
              },
             "type" : "StdDev"
            },
            {
             "k" : "9",
             "n" : "Дисперсия",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "640.009686",

             "group" :
              {
               "k" : "7"
              },
             "type" : "Disp"
            },
            {
             "k" : "10",
             "n" : "Размах",
             "vis" : "1",

             "nodeType" : "Statistics",
             "value" : "74.940244",
             "group" :
              {
               "k" : "7"
              },
             "type" : "Range"
            },
            {
             "k" : "11",

             "n" : "Коэффицент вариации",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "53.828233",
             "group" :
              {
               "k" : "7"
              },
             "type" : "VarC"
            },

            {
             "k" : "12",
             "n" : "Форма",
             "vis" : "1",
             "nodeType" : "Category",
             "value" : "",
             "category" : "Form"
            },
            {
             "k" : "13",

             "n" : "Асимметрия",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "0.249688",
             "group" :
              {
               "k" : "12"
              },
             "type" : "Skew"
            },

            {
             "k" : "14",
             "n" : "Эксцесс",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "-1.262159",
             "group" :
              {
               "k" : "12"
              },

             "type" : "Kurt"
            },
            {
             "k" : "15",
             "n" : "Порядковые статистики",
             "vis" : "1",
             "nodeType" : "Category",
             "value" : "",
             "category" : "OrderStatistics"
            },

            {
             "k" : "16",
             "n" : "Верхняя дециль",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "74.107930",
             "group" :
              {
               "k" : "15"
              },

             "type" : "HighDecile"
            },
            {
             "k" : "17",
             "n" : "Верхняя квартиль",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "66.651615",
             "group" :
              {

               "k" : "15"
              },
             "type" : "HighQuartile"
            },
            {
             "k" : "18",
             "n" : "Нижняя квартиль",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "26.918788",

             "group" :
              {
               "k" : "15"
              },
             "type" : "LowQuartile"
            },
            {
             "k" : "19",
             "n" : "Нижняя дециль",
             "vis" : "1",

             "nodeType" : "Statistics",
             "value" : "17.439952",
             "group" :
              {
               "k" : "15"
              },
             "type" : "LowDecile"
            },
            {
             "k" : "20",

             "n" : "Зависимость",
             "vis" : "1",
             "nodeType" : "Category",
             "value" : "",
             "category" : "Dependence"
            },
            {
             "k" : "21",
             "n" : "Автокорреляция первого порядка",
             "vis" : "1",

             "nodeType" : "Statistics",
             "value" : "-0.232893",
             "group" :
              {
               "k" : "20"
              },
             "type" : "AutoCorrelation1"
            },
            {
             "k" : "22",

             "n" : "Описание выборки",
             "vis" : "1",
             "nodeType" : "Category",
             "value" : "",
             "category" : "SamplingDescr"
            },
            {
             "k" : "23",
             "n" : "Количество",
             "vis" : "1",

             "nodeType" : "Statistics",
             "value" : "12.000000",
             "group" :
              {
               "k" : "22"
              },
             "type" : "Count"
            },
            {
             "k" : "24",

             "n" : "Количество числовых значений",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "11.000000",
             "group" :
              {
               "k" : "22"
              },
             "type" : "NumbersCount"
            },

            {
             "k" : "25",
             "n" : "Количество непустых значений",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "12.000000",
             "group" :
              {
               "k" : "22"
              },

             "type" : "NonEmptyCount"
            },
            {
             "k" : "26",
             "n" : "Количество пустых значений",
             "vis" : "1",
             "nodeType" : "Statistics",
             "value" : "0",
             "group" :
              {

               "k" : "22"
              },
             "type" : "EmptyCount"
            }
          ]
        }
      },
     "hasPivot" : "1"
    }
  }
}


    public static EaxStatistics GetStatistics(EaxId moniker)
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
                    statistics = new EaxStatisticsPattern() { includeAll = true }
                }
            },
            tEax = moniker
        };
        //Получение информации о статистических характеристиках
        var result = somClient.GetEaxMd(tEaxMd);
        return result.meta.statistics;
    }


См. также:


[GetEaxMd:
 Операция](../GetEaxMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
