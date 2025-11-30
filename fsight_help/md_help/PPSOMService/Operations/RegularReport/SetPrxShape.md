# SetPrxShape: Операция

SetPrxShape: Операция
-


**


# SetPrxShape


## Синтаксис


bool SetPrxShape(PrxShapeId shapeMon, PrxShapeParams
 tArg)


## Параметры


shapeMon. Моникёр
 фигуры.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetPrxShape изменяет
 настройки фигуры, расположенной на листе регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле shapeMon
 моникёр фигуры, а в поле tArg
 устанавливаемые настройки. Моникёр может быть сформирован на базе моникёра
 регламентного отчёта по следующему правилу: «Моникёр
 экземпляра рег.отчёта!Sheets!ключ листа!Objects!идентификатор фигуры».


Результатом выполнения операции будут логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек фигуры, расположенной на листе
 регламентного отчёта. В запросе передаётся моникёр фигуры и устанавливаемые
 настройки градиентной заливки фона, границы и текста. В ответе возвращается
 признак успешного изменения настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPrxShape xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<shapeMon xmlns="****">
  <id>NIOJJPAOELHBGOAEEIPNMJOEPPNPDKCEFLNNFGPGJHAJAIHA!M!S!PKKFPIABOELHBGOAEKKGBBGANBJNMDDAEDLCBNPPIFFBBMNNG!Sheets!1!Objects!PrxShape1</id>  </shapeMon>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<bca>
[![](../../minus.gif)](../../#)<it>
  <color r="**100**" g="**100**" b="**100**" a="**0**" />
  </it>
[![](../../minus.gif)](../../#)<it>
  <color r="**200**" g="**200**" b="**200**" a="**0**" />
  </it>
  </bca>
[![](../../minus.gif)](../../#)<bdca>
[![](../../minus.gif)](../../#)<it>
  <color r="**182**" g="**182**" b="**182**" a="**0**" />
  </it>
  </bdca>
  <bw>0.5</bw>  <txt>Скруглённый прямоугольник</txt>  <va>0</va>  <ha>1</ha>  </tArg>
  </SetPrxShape>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPrxShapeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPrxShapeResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPrxShape" :
  {
   "shapeMon" :
    {
     "id" : "NIOJJPAOELHBGOAEEIPNMJOEPPNPDKCEFLNNFGPGJHAJAIHA!M!S!PKKFPIABOELHBGOAEKKGBBGANBJNMDDAEDLCBNPPIFFBBMNNG!Sheets!1!Objects!PrxShape1"
    },
   "tArg" :
    {
     "bca" :
      {
       "it" :
        [
          {
           "color" :
            {
             "@a" : "0",
             "@r" : "100",
             "@b" : "100",
             "@g" : "100"
            }
          },
          {
           "color" :
            {
             "@a" : "0",
             "@r" : "200",
             "@b" : "200",
             "@g" : "200"
            }
          }
        ]
      },
     "bdca" :
      {
       "it" :
        {
         "color" :
          {
           "@a" : "0",
           "@r" : "182",
           "@b" : "182",
           "@g" : "182"
          }
        }
      },
     "bw" : "0.5",
     "txt" : "Скруглённый прямоугольник",
     "va" : "0",
     "ha" : "1"
    }
  }
}

### JSON-ответ:


{
 "SetPrxShapeResult" : "1"
}


public static bool SetPrxShape(string moniker, uint sheetKey, string shapeId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetPrxShape()
    {
        shapeMon = new PrxShapeId()
        {
            id = moniker + "!Sheets!" + sheetKey + "!Objects!" + shapeId
        },
        tArg = new PrxShapeParams()
        {
            bca = new GradientColor[] // Градиентная заливка фона
            {
                new GradientColor()
                {
                    color = new BaseColor()
                    {   r = 100, rSpecified = true,
                        g = 100, gSpecified = true,
                        b = 100, bSpecified = true,
                        a = 0, aSpecified = true }
                },
                new GradientColor()
                {
                    color = new BaseColor()
                    {   r = 200, rSpecified = true,
                        g = 200, gSpecified = true,
                        b = 200, bSpecified = true,
                        a = 0, aSpecified = true }
                }
            },
            bdca = new GradientColor[] // Залифка границы фигуры
            {
                new GradientColor()
                {
                    color = new BaseColor()
                    {   r = 182, rSpecified = true,
                        g = 182, gSpecified = true,
                        b = 182, bSpecified = true,
                        a = 0, aSpecified = true }
                }
            },
            bw = 0.5f, // Толщина
            txt = "Скруглённый прямоугольник", // Текст в фигуре
            ha = 1, // Выравнивание по горизонтали - Центр
            va = 0 // Выравнивание по вертикали - Верхний край
        }
    };
    // Изменение настроек фигуры
    var result = somClient.SetPrxShape(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
