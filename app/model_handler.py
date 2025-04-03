import joblib
import numpy as np
import os

# Пути к файлам модели
MODEL_PATH = os.path.join(os.path.dirname(__file__), "models/iris_model.joblib")
CLASS_MAPPING_PATH = os.path.join(os.path.dirname(__file__), "models/class_mapping.joblib")

# Загрузка модели и маппинга классов
model = joblib.load(MODEL_PATH)
class_mapping = joblib.load(CLASS_MAPPING_PATH)

def predict_iris_species(features):
    """
    Предсказывает вид ириса на основе введенных параметров.
    
    Args:
        features (list): [sepal_length, sepal_width, petal_length, petal_width]
    
    Returns:
        tuple: (species_name, probability)
    """
    # Преобразование входных данных в нужный формат
    features_array = np.array(features).reshape(1, -1)
    
    # Получение предсказания класса
    prediction = model.predict(features_array)[0]
    
    # Получение вероятностей для каждого класса
    probabilities = model.predict_proba(features_array)[0]
    max_probability = round(float(max(probabilities)) * 100, 2)
    
    # Получение названия вида ириса
    species_name = class_mapping[prediction]
    
    return species_name, max_probability