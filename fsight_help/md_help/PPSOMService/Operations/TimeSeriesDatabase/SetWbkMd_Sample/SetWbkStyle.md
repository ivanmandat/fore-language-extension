# Изменение стиля ячеек

Изменение стиля ячеек
-


**


# Изменение стиля ячеек


Ниже приведен пример использования операции [SetWbkMd](../SetWbkMd.htm) для изменения стиля ячеек.
 В запросе передаются: экземпляр открытой рабочей книги и изменённые стили
 ячеек. В ответе приходит экземпляр изменяемой рабочей книги.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W9</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>  <styles>true</styles>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<styles>
[![](../../../minus.gif)](../../../#)<splice>
[![](../../../minus.gif)](../../../#)<tabStyle>
  <Font C="**#FF6A00**" />
  </tabStyle>
  <setDefault>false</setDefault>  </splice>
[![](../../../minus.gif)](../../../#)<discrepancy>
[![](../../../minus.gif)](../../../#)<tabStyle>
  <Font I="**true**" />
  </tabStyle>
  <setDefault>false</setDefault>  </discrepancy>
[![](../../../minus.gif)](../../../#)<forecast>
[![](../../../minus.gif)](../../../#)<tabStyle>
  <Font B="**true**" />
  </tabStyle>
  <setDefault>false</setDefault>  </forecast>
  </styles>
  </meta>
  </tArg>
  </SetWbkMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetWbkMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!W9</id>  </id>
  </SetWbkMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetWbkMd" :
  {
   "tWbk" :
    {
     "id" : "S1!M!S!W9"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "styles" : "true"
      },
     "meta" :
      {
       "styles" :
        {
         "splice" :
          {
           "tabStyle" :
            {
             "Font" :
              {
               "@C" : "#FF6A00"
              }
            },
           "setDefault" : "false"
          },
         "discrepancy" :
          {
           "tabStyle" :
            {
             "Font" :
              {
               "@I" : "true"
              }
            },
           "setDefault" : "false"
          },
         "forecast" :
          {
           "tabStyle" :
            {
             "Font" :
              {
               "@B" : "true"
              }
            },
           "setDefault" : "false"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetWbkMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!W9"
    }
  }
}


public static SetWbkMdResult SetWbkStyle(WbkId wbk)
{// Задаём параметры выполнения операции
    var tOp = new SetWbkMd
    {
        tWbk = wbk,
        tArg = new SetWbkMdArg
        {   // Задаём шаблон изменения данных
            pattern = new WbkMdPattern()
            {styles = true},
            // Задаём изменяемые данные
            meta = new WbkMd()
            {
                styles = new LnTabStyles()
                {// Стиль для ячеек с прогнозными данными
                    forecast = new LnCellStyle()
                    {
                        setDefault = false,
                        tabStyle = new TabStyle()
                        {
                            Font = new TabFontStyle
                            {
                                BSpecified = true,
                                B = true
                            }
                        }
                    },// Ситль для ячеек, являющихся источником данных для совмещенного ряда
                    splice = new LnCellStyle()
                    {
                        setDefault = false,
                        tabStyle = new TabStyle()
                        {
                            Font = new TabFontStyle
                            {C = "#FF6A00"}
                        }
                    },// Стиль для ячеек, хранимые значения которых отличаются от рассчитанных
                    discrepancy = new LnCellStyle()
                    {
                        setDefault = false,
                        tabStyle = new TabStyle()
                        {
                            Font = new TabFontStyle
                            {
                                I = true,
                                ISpecified = true
                            }
                        }
                    }
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var sRes = somClient.SetWbkMd(tOp);
    return sRes;
}


См. также:


[SetWbkMd:
 Операция](../SetWbkMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
