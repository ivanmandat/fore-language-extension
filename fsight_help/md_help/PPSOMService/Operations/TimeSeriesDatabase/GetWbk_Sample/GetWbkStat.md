# Получение значений статистических характеристик для рядов рабочей книги

Получение значений статистических характеристик для рядов рабочей книги
-


**


# Получение значений статистических характеристик для рядов рабочей книги


Ниже приведен пример использования операции [GetWbkMd](../GetWbkMd.htm) для получения значений
 статистических характеристик для всех рядов рабочей книги. В запросе передаются:
 экземпляр открытой рабочей книги и параметры получения значений статистик.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W3</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <lanerStatistics />
  </pattern>
  </tArg>
  </GetWbkMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetWbkMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!W3</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>WBK_AD</i>  <n>Годовые данные</n>  <k>5505</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**3**">
  <its />
  </series>
[![](../../../minus.gif)](../../../#)<lanerStatistics>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <id>Число наблюдений</id>  <n>Число наблюдений</n>  <vis>1</vis>  <type>ObsCount</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>1</k>  <id>Общие</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>Коэффициент детерминации (R^2)</id>  <n>Коэффициент детерминации (R^2)</n>  <vis>1</vis>  <type>R2</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>2</k>  <id>Критерии качества</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>Скорректированный коэффициент детерминации (adj R^2)</id>  <n>Скорректированный коэффициент детерминации (adj R^2)</n>  <vis>1</vis>  <type>AdjR2</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>2</k>  <id>Критерии качества</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>3</k>  <id>Статистика Фишера (F)</id>  <n>Статистика Фишера (F)</n>  <vis>1</vis>  <type>Fstat</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>2</k>  <id>Критерии качества</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>4</k>  <id>Вероятность статистики Фишера (p-v)</id>  <n>Вероятность статистики Фишера (p-v)</n>  <vis>1</vis>  <type>ProbFstat</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>2</k>  <id>Критерии качества</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>5</k>  <id>Логарифм функции правдоподобия (LogL)</id>  <n>Логарифм функции правдоподобия (LogL)</n>  <vis>1</vis>  <type>LogL</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>2</k>  <id>Критерии качества</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>6</k>  <id>Информационный критерий Акаике (AIC)</id>  <n>Информационный критерий Акаике (AIC)</n>  <vis>1</vis>  <type>AIC</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>2</k>  <id>Критерии качества</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>7</k>  <id>Информационный критерий Шварца (SC)</id>  <n>Информационный критерий Шварца (SC)</n>  <vis>1</vis>  <type>SC</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>2</k>  <id>Критерии качества</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>8</k>  <id>Стандартная ошибка (SE)</id>  <n>Стандартная ошибка (SE)</n>  <vis>1</vis>  <type>SE</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>2</k>  <id>Критерии качества</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>9</k>  <id>Статистика Дарбина-Уотсона (DW)</id>  <n>Статистика Дарбина-Уотсона (DW)</n>  <vis>1</vis>  <type>DW</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>3</k>  <id>Диагностические критерии</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>10</k>  <id>Вероятность нижней границы</id>  <n>Вероятность нижней границы</n>  <vis>1</vis>  <type>DWLowerBound</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>3</k>  <id>Диагностические критерии</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>11</k>  <id>Вероятность верхней границы</id>  <n>Вероятность верхней границы</n>  <vis>1</vis>  <type>DWUpperBound</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>3</k>  <id>Диагностические критерии</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>12</k>  <id>Среднее остатков</id>  <n>Среднее остатков</n>  <vis>1</vis>  <type>ME</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>4</k>  <id>Анализ остатков</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>13</k>  <id>Среднее абсолютных величин остатков</id>  <n>Среднее абсолютных величин остатков</n>  <vis>1</vis>  <type>MAE</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>4</k>  <id>Анализ остатков</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>14</k>  <id>Среднее квадратов остатков</id>  <n>Среднее квадратов остатков</n>  <vis>1</vis>  <type>MSE</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>4</k>  <id>Анализ остатков</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>15</k>  <id>Корень из среднего квадратов остатков</id>  <n>Корень из среднего квадратов остатков</n>  <vis>1</vis>  <type>SqMSE</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>4</k>  <id>Анализ остатков</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>16</k>  <id>Дисперсия остатков</id>  <n>Дисперсия остатков</n>  <vis>1</vis>  <type>VE</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>4</k>  <id>Анализ остатков</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>17</k>  <id>Стандартное отклонение остатков</id>  <n>Стандартное отклонение остатков</n>  <vis>1</vis>  <type>SEE</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>4</k>  <id>Анализ остатков</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>18</k>  <id>Минимум</id>  <n>Минимум</n>  <vis>1</vis>  <type>Min</type>  <value>0.61346821</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>19</k>  <id>Максимум</id>  <n>Максимум</n>  <vis>1</vis>  <type>Max</type>  <value>1.68005197</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>20</k>  <id>Среднее</id>  <n>Среднее</n>  <vis>1</vis>  <type>Average</type>  <value>1.139227082222222</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>21</k>  <id>Медиана</id>  <n>Медиана</n>  <vis>1</vis>  <type>Median</type>  <value>1.14567254</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>22</k>  <id>Мода</id>  <n>Мода</n>  <vis>1</vis>  <type>Mode</type>  <value>0.69913685</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>23</k>  <id>Стандартное отклонение</id>  <n>Стандартное отклонение</n>  <vis>1</vis>  <type>StDev</type>  <value>0.3502606231582123</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>24</k>  <id>Дисперсия</id>  <n>Дисперсия</n>  <vis>1</vis>  <type>Dispersion</type>  <value>0.1226825041351792</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>25</k>  <id>Дата начала</id>  <n>Дата начала</n>  <vis>1</vis>  <type>StartDate</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>26</k>  <id>Дата окончания</id>  <n>Дата окончания</n>  <vis>1</vis>  <type>EndDate</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>27</k>  <id>Самая ранняя дата начала</id>  <n>Самая ранняя дата начала</n>  <vis>1</vis>  <type>FStartDate</type>  <value>1995-01-01</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>28</k>  <id>Самая поздняя дата начала</id>  <n>Самая поздняя дата начала</n>  <vis>1</vis>  <type>LStartDate</type>  <value>1995-01-01</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>29</k>  <id>Самая ранняя дата окончания</id>  <n>Самая ранняя дата окончания</n>  <vis>1</vis>  <type>FEndDate</type>  <value>2015-01-01</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>30</k>  <id>Самая поздняя дата окончания</id>  <n>Самая поздняя дата окончания</n>  <vis>1</vis>  <type>LEndDate</type>  <value>2015-01-01</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>31</k>  <id>Количество наблюдений</id>  <n>Количество наблюдений</n>  <vis>1</vis>  <type>ObservCnt</type>  <value>63</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>32</k>  <id>Количество пустых значений</id>  <n>Количество пустых значений</n>  <vis>1</vis>  <type>EmptyCnt</type>  <value>0</value>[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>33</k>  <id>Масштаб</id>  <n>Масштаб</n>  <vis>1</vis>  <type>Scale</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>34</k>  <id>Асимметрия</id>  <n>Асимметрия</n>  <vis>1</vis>  <type>Skew</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>35</k>  <id>Эксцесс</id>  <n>Эксцесс</n>  <vis>1</vis>  <type>Kurt</type>  <value />
[![](../../../minus.gif)](../../../#)<group>
  <k>5</k>  <id>Характеристики</id>  </group>
  </it>
  </its>
  </lanerStatistics>
  </meta>
  </GetWbkMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetWbkMd" :
  {
   "tWbk" :
    {
     "id" : "S1!M!S!W3"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "lanerStatistics" : ""
      }
    }
  }
}

### JSON-ответ:


{
 "GetWbkMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!W3"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "2",
         "@hf" : "0",
         "i" : "WBK_AD",
         "n" : "Годовые данные",
         "k" : "5505",
         "c" : "2827",
         "p" : "5471",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "windowsPosition" : "Vertical",
     "hasPivot" : "0",
     "hasLaner" : "1",
     "series" :
      {
       "@count" : "3",
       "its" : ""
      },
     "lanerStatistics" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "0",
             "id" : "Число наблюдений",
             "n" : "Число наблюдений",
             "vis" : "1",
             "type" : "ObsCount",
             "value" : "",
             "group" :
              {
               "k" : "1",
               "id" : "Общие"
              }
            },
            {
             "k" : "1",
             "id" : "Коэффициент детерминации (R^2)",
             "n" : "Коэффициент детерминации (R^2)",
             "vis" : "1",
             "type" : "R2",
             "value" : "",
             "group" :
              {
               "k" : "2",
               "id" : "Критерии качества"
              }
            },
            {
             "k" : "2",
             "id" : "Скорректированный коэффициент детерминации (adj R^2)",
             "n" : "Скорректированный коэффициент детерминации (adj R^2)",
             "vis" : "1",
             "type" : "AdjR2",
             "value" : "",
             "group" :
              {
               "k" : "2",
               "id" : "Критерии качества"
              }
            },
            {
             "k" : "3",
             "id" : "Статистика Фишера (F)",
             "n" : "Статистика Фишера (F)",
             "vis" : "1",
             "type" : "Fstat",
             "value" : "",
             "group" :
              {
               "k" : "2",
               "id" : "Критерии качества"
              }
            },
            {
             "k" : "4",
             "id" : "Вероятность статистики Фишера (p-v)",
             "n" : "Вероятность статистики Фишера (p-v)",
             "vis" : "1",
             "type" : "ProbFstat",
             "value" : "",
             "group" :
              {
               "k" : "2",
               "id" : "Критерии качества"
              }
            },
            {
             "k" : "5",
             "id" : "Логарифм функции правдоподобия (LogL)",
             "n" : "Логарифм функции правдоподобия (LogL)",
             "vis" : "1",
             "type" : "LogL",
             "value" : "",
             "group" :
              {
               "k" : "2",
               "id" : "Критерии качества"
              }
            },
            {
             "k" : "6",
             "id" : "Информационный критерий Акаике (AIC)",
             "n" : "Информационный критерий Акаике (AIC)",
             "vis" : "1",
             "type" : "AIC",
             "value" : "",
             "group" :
              {
               "k" : "2",
               "id" : "Критерии качества"
              }
            },
            {
             "k" : "7",
             "id" : "Информационный критерий Шварца (SC)",
             "n" : "Информационный критерий Шварца (SC)",
             "vis" : "1",
             "type" : "SC",
             "value" : "",
             "group" :
              {
               "k" : "2",
               "id" : "Критерии качества"
              }
            },
            {
             "k" : "8",
             "id" : "Стандартная ошибка (SE)",
             "n" : "Стандартная ошибка (SE)",
             "vis" : "1",
             "type" : "SE",
             "value" : "",
             "group" :
              {
               "k" : "2",
               "id" : "Критерии качества"
              }
            },
            {
             "k" : "9",
             "id" : "Статистика Дарбина-Уотсона (DW)",
             "n" : "Статистика Дарбина-Уотсона (DW)",
             "vis" : "1",
             "type" : "DW",
             "value" : "",
             "group" :
              {
               "k" : "3",
               "id" : "Диагностические критерии"
              }
            },
            {
             "k" : "10",
             "id" : "Вероятность нижней границы",
             "n" : "Вероятность нижней границы",
             "vis" : "1",
             "type" : "DWLowerBound",
             "value" : "",
             "group" :
              {
               "k" : "3",
               "id" : "Диагностические критерии"
              }
            },
            {
             "k" : "11",
             "id" : "Вероятность верхней границы",
             "n" : "Вероятность верхней границы",
             "vis" : "1",
             "type" : "DWUpperBound",
             "value" : "",
             "group" :
              {
               "k" : "3",
               "id" : "Диагностические критерии"
              }
            },
            {
             "k" : "12",
             "id" : "Среднее остатков",
             "n" : "Среднее остатков",
             "vis" : "1",
             "type" : "ME",
             "value" : "",
             "group" :
              {
               "k" : "4",
               "id" : "Анализ остатков"
              }
            },
            {
             "k" : "13",
             "id" : "Среднее абсолютных величин остатков",
             "n" : "Среднее абсолютных величин остатков",
             "vis" : "1",
             "type" : "MAE",
             "value" : "",
             "group" :
              {
               "k" : "4",
               "id" : "Анализ остатков"
              }
            },
            {
             "k" : "14",
             "id" : "Среднее квадратов остатков",
             "n" : "Среднее квадратов остатков",
             "vis" : "1",
             "type" : "MSE",
             "value" : "",
             "group" :
              {
               "k" : "4",
               "id" : "Анализ остатков"
              }
            },
            {
             "k" : "15",
             "id" : "Корень из среднего квадратов остатков",
             "n" : "Корень из среднего квадратов остатков",
             "vis" : "1",
             "type" : "SqMSE",
             "value" : "",
             "group" :
              {
               "k" : "4",
               "id" : "Анализ остатков"
              }
            },
            {
             "k" : "16",
             "id" : "Дисперсия остатков",
             "n" : "Дисперсия остатков",
             "vis" : "1",
             "type" : "VE",
             "value" : "",
             "group" :
              {
               "k" : "4",
               "id" : "Анализ остатков"
              }
            },
            {
             "k" : "17",
             "id" : "Стандартное отклонение остатков",
             "n" : "Стандартное отклонение остатков",
             "vis" : "1",
             "type" : "SEE",
             "value" : "",
             "group" :
              {
               "k" : "4",
               "id" : "Анализ остатков"
              }
            },
            {
             "k" : "18",
             "id" : "Минимум",
             "n" : "Минимум",
             "vis" : "1",
             "type" : "Min",
             "value" : "0.61346821",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "19",
             "id" : "Максимум",
             "n" : "Максимум",
             "vis" : "1",
             "type" : "Max",
             "value" : "1.68005197",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "20",
             "id" : "Среднее",
             "n" : "Среднее",
             "vis" : "1",
             "type" : "Average",
             "value" : "1.139227082222222",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "21",
             "id" : "Медиана",
             "n" : "Медиана",
             "vis" : "1",
             "type" : "Median",
             "value" : "1.14567254",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "22",
             "id" : "Мода",
             "n" : "Мода",
             "vis" : "1",
             "type" : "Mode",
             "value" : "0.69913685",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "23",
             "id" : "Стандартное отклонение",
             "n" : "Стандартное отклонение",
             "vis" : "1",
             "type" : "StDev",
             "value" : "0.3502606231582123",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "24",
             "id" : "Дисперсия",
             "n" : "Дисперсия",
             "vis" : "1",
             "type" : "Dispersion",
             "value" : "0.1226825041351792",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "25",
             "id" : "Дата начала",
             "n" : "Дата начала",
             "vis" : "1",
             "type" : "StartDate",
             "value" : "",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "26",
             "id" : "Дата окончания",
             "n" : "Дата окончания",
             "vis" : "1",
             "type" : "EndDate",
             "value" : "",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "27",
             "id" : "Самая ранняя дата начала",
             "n" : "Самая ранняя дата начала",
             "vis" : "1",
             "type" : "FStartDate",
             "value" : "1995-01-01",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "28",
             "id" : "Самая поздняя дата начала",
             "n" : "Самая поздняя дата начала",
             "vis" : "1",
             "type" : "LStartDate",
             "value" : "1995-01-01",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "29",
             "id" : "Самая ранняя дата окончания",
             "n" : "Самая ранняя дата окончания",
             "vis" : "1",
             "type" : "FEndDate",
             "value" : "2015-01-01",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "30",
             "id" : "Самая поздняя дата окончания",
             "n" : "Самая поздняя дата окончания",
             "vis" : "1",
             "type" : "LEndDate",
             "value" : "2015-01-01",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "31",
             "id" : "Количество наблюдений",
             "n" : "Количество наблюдений",
             "vis" : "1",
             "type" : "ObservCnt",
             "value" : "63",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "32",
             "id" : "Количество пустых значений",
             "n" : "Количество пустых значений",
             "vis" : "1",
             "type" : "EmptyCnt",
             "value" : "0",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "33",
             "id" : "Масштаб",
             "n" : "Масштаб",
             "vis" : "1",
             "type" : "Scale",
             "value" : "",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "34",
             "id" : "Асимметрия",
             "n" : "Асимметрия",
             "vis" : "1",
             "type" : "Skew",
             "value" : "",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            },
            {
             "k" : "35",
             "id" : "Эксцесс",
             "n" : "Эксцесс",
             "vis" : "1",
             "type" : "Kurt",
             "value" : "",
             "group" :
              {
               "k" : "5",
               "id" : "Характеристики"
              }
            }
          ]
        }
      }
    }
  }
}


public static GetWbkMdResult GetWbkStat(WbkId wbk)
{// Задаём параметры выполнения операции
    var tOp = new GetWbkMd
    {
        tWbk = wbk,
        tArg = new GetWbkMdArg
        {// Задаём шаблон извлечения данных
            pattern = new WbkMdPattern
            {
                lanerStatistics = new LnStatisticsPattern()
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var gRes = somClient.GetWbkMd(tOp);
    Console.WriteLine("Получены статистики рабочей книги: " + gRes.id.id);
    // Выводим статистики в окно консоли
    Console.WriteLine("---Статистики---");
    LnStatistics stats = gRes.meta.lanerStatistics;
    ulong gKey = 0;
    foreach (LnStatistic st in stats.its)
    {
        if (gKey != st.group.k)
        {
            Console.WriteLine("".PadRight(3) + st.group.id);
            gKey = st.group.k;
        }
        Console.Write("".PadRight(6) + st.n + "(" + st.type + "): ");
        if (st.value != "") {Console.WriteLine(st.value);}
        else {Console.WriteLine("-");}
    };
    return gRes;
}


См. также:


[GetWbkMd:
 Операция](../GetWbkMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
